import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useUserStore } from "../src/store/userStore";

const firebaseConfig = {
  apiKey: "AIzaSyDt-6P28E8sMnoDrr-b8OEpTq-RQ1fmrJ8",
  authDomain: "pop-n-dine-54658.firebaseapp.com",
  projectId: "pop-n-dine-54658",
  storageBucket: "pop-n-dine-54658.appspot.com",
  messagingSenderId: "712394461247",
  appId: "1:712394461247:web:ddae81aab6514bc7a2688a",
  measurementId: "G-ZDC4VJB2XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
const provider = new GoogleAuthProvider();

// Google Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return await handleUserData(result.user);
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};

// Email/Password Sign-Up
export const manualSignUp = async (
  email: string, 
  password: string, 
  name: string, 
  imageFile: File | null
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return await handleUserData(userCredential.user, name, imageFile, password);
  } catch (error) {
    console.error("Manual Sign-Up Error:", error);
    throw error;
  }
};

// Email/Password Login
export const manualLogin = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // First try to get existing user data
    const existingUserData = await getUserDocument(userCredential.user.uid);
    
    // If found, use that data instead of creating new
    if (existingUserData) {
      useUserStore.getState().setUser(existingUserData);
      return existingUserData;
    }
    
    // Only create new data if no existing record found
    return await handleUserData(userCredential.user);
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

// Common user data handling
const handleUserData = async (user: any, name?: string, imageFile?: File | null, password?: string) => {
  // First try to get existing data
  const existingData = await getUserDocument(user.uid);
  
  let imageUrl = user.photoURL || "https://via.placeholder.com/100";
  
  if (imageFile) {
    const storageRef = ref(storage, `profile_images/${user.uid}`);
    await uploadBytes(storageRef, imageFile);
    imageUrl = await getDownloadURL(storageRef);
  }

  // Use existing name if available, otherwise use provided name or fallbacks
  const userName = existingData?.name || name || user.displayName || "User";

  const userData = {
    uid: user.uid,
    email: user.email || "",
    name: userName,
    image: existingData?.image || imageUrl, // Preserve existing image if available
    phone: existingData?.phone || "",
    createdAt: existingData?.createdAt || new Date(),
    authProvider: user.providerData?.[0]?.providerId || "password",
    ...(password && { password })
  };

  const collectionName = userData.authProvider === "google.com" 
    ? "google_logins" 
    : "manual_logins";

  const userRef = doc(db, collectionName, user.uid);
  await setDoc(userRef, userData, { merge: true });

  useUserStore.getState().setUser(userData);
  return userData;
};

// Helper function to get user document
export const getUserDocument = async (uid: string) => {
  // Check both collections
  const googleDoc = await getDoc(doc(db, "google_logins", uid));
  if (googleDoc.exists()) return googleDoc.data();

  const manualDoc = await getDoc(doc(db, "manual_logins", uid));
  if (manualDoc.exists()) return manualDoc.data();

  return null;
};
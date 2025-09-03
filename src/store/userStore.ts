// userStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface UserState {
  isAuthenticated: boolean;
  user: {
    uid: string;
    email: string;
    name: string;
    image: string;
    phone?: string;
    password?: string;
    role?: string; // Added role field
  } | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateUser: (data: { name?: string; email?: string; image?: string; phone?: string }) => Promise<void>;
  updatePassword: (currentPassword: string, newPassword: string) => boolean;
  setUser: (user: { uid: string; email: string; name: string; image: string; phone?: string }) => void;
}

// Default testing users
const TEST_USERS = [
  {
    email: 'admin@popndine.com',
    password: 'admin123',
    name: 'Admin User',
    phone: '+1234567890',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop',
    role: 'admin'
  },
  {
    email: 'customer@popndine.com',
    password: 'customer123',
    name: 'Regular Customer',
    phone: '+0987654321',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop',
    role: 'customer'
  }
];

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: null,
      login: (email: string, password: string) => {
        const foundUser = TEST_USERS.find(user => 
          user.email === email && user.password === password
        );

        if (foundUser) {
          set({ 
            isAuthenticated: true, 
            user: {
              uid: `temp-${foundUser.role}-id`, // Generate a temp uid based on role
              email: foundUser.email,
              name: foundUser.name,
              image: foundUser.image,
              phone: foundUser.phone,
              password: foundUser.password,
              role: foundUser.role
            }
          });
          return true;
        }
        return false;
      },
      logout: () => {
        set({ isAuthenticated: false, user: null });
      },
      updateUser: async (data) => {
        const state = get();
        if (state.user) {
          // Update Firestore
          if (!state.user.uid.startsWith('temp-')) { // Skip Firestore update for temp users
            const userRef = doc(db, "users", state.user.uid);
            await setDoc(userRef, data, { merge: true });
          }
          
          // Update local state
          set((state) => ({
            user: state.user ? {
              ...state.user,
              ...data
            } : null
          }));
        }
      },
      updatePassword: (currentPassword: string, newPassword: string) => {
        const state = get();
        if (state.user && state.user.password === currentPassword) {
          set((state) => ({
            user: state.user ? {
              ...state.user,
              password: newPassword
            } : null
          }));
          return true;
        }
        return false;
      },
      setUser: (user) => {
        set({
          isAuthenticated: true,
          user: {
            uid: user.uid,
            email: user.email,
            name: user.name,
            image: user.image,
            phone: user.phone
          }
        });
      }
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        isAuthenticated: state.isAuthenticated,
        user: state.user 
      }),
    }
  )
);
import * as functions from 'firebase-functions';
import Razorpay from 'razorpay';

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: 'your_key_id_here',      // <-- replace with your Razorpay Key ID
  key_secret: 'your_key_secret_here' // <-- replace with your Razorpay Key Secret
});

export const createOrder = functions.https.onRequest(async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount, // in paise (e.g., ₹500 => 50000 paise)
      currency: 'INR',
      receipt: 'receipt_order_' + Math.random().toString(36).substr(2, 9),
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).send('Error creating Razorpay order');
  }
});

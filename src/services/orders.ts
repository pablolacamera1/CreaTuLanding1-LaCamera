import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { CartItem } from "../context/CartContext";

const ordersCollection = collection(db, "orders");

export const createOrder = async (
  buyer: { name: string; phone: string; email: string },
  items: CartItem[],
  total: number
) => {
  const order = {
    buyer,
    items,
    total,
    date: Timestamp.fromDate(new Date()),
  };

  const docRef = await addDoc(ordersCollection, order);
  return docRef.id;
};

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


export interface OrderItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

export interface Buyer {
  name: string;
  phone: string;
  email: string;
}

export interface Order {
  buyer: Buyer;
  items: OrderItem[];
  total: number;
  date: Timestamp;
}

export const createOrder = async (order: Order) => {
  const ordersRef = collection(db, "orders");
  const docRef = await addDoc(ordersRef, order);
  return docRef.id;
};

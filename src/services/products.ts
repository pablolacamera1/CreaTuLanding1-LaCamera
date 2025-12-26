import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Product } from "../data/products";

const productsCollection = collection(db, "products");

export const getProducts = async (): Promise<Product[]> => {
  const snapshot = await getDocs(productsCollection);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<Product, "id">)
  }));
};

export const getProductsByCategory = async (categoryId: string): Promise<Product[]> => {
  const q = query(productsCollection, where("category", "==", categoryId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<Product, "id">)
  }));
};

export const getProductById = async (id: string): Promise<Product | null> => {
  const ref = doc(db, "products", id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Product, "id">)
  };
};

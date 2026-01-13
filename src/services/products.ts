import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Product } from "../data/products";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const productosRef = collection(db, "discos");
    const snapshot = await getDocs(productosRef);

    console.log(
      "Firestore snapshot:",
      snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    );

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[];
  } catch (error) {
    console.error("Error trayendo productos:", error);
    return [];
  }
};

export const getProductById = async (
  id: string
): Promise<Product | null> => {
  try {
    const docRef = doc(db, "discos", id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      console.warn("Producto no encontrado:", id);
      return null;
    }

    return {
      id: snapshot.id,
      ...snapshot.data(),
    } as Product;
  } catch (error) {
    console.error("Error trayendo producto:", error);
    return null;
  }
};

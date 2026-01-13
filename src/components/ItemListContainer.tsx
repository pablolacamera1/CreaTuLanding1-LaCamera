import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Product } from "../data/products";
import { getProducts } from "../services/products";

const ItemListContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando discos...</p>;

  return <ItemList products={products} />;
};

export default ItemListContainer;

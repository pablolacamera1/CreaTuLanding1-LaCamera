import { useEffect, useState } from "react";
import { getProducts } from "../data/products";
import { Product } from "../data/products";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res));
  }, []);

  return (
    <div>
      <h2>Catálogo</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;



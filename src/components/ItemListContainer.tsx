import { useEffect, useState } from "react";
import { getProducts } from "../data/products";
import ItemList from "./ItemList";

interface Props {
  greeting: string;
}

function ItemListContainer({ greeting }: Props) {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    getProducts().then((resp: any) => {
      setItems(resp);
    });
  }, []);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;

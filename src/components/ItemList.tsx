import Item from "./Item";

import { Product } from '../data/products'; 


interface ItemListProps {
  items: Product[];
}


function ItemList({ items }: ItemListProps) {
  return (
    <div>
      {items.map((p) => (
        <Item key={p.id} item={p} />
      ))}
    </div>
  );
}

export default ItemList;

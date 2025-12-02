import { Link } from "react-router-dom";


interface Product {
  id: number;
  name: string;
  price: number;
}

interface ItemProps {
  item: Product;
}


function Item({ item }: ItemProps) {
  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;
import "./Item.css";

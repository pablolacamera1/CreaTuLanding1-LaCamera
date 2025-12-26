import { useState } from "react";
import { Product } from "../data/products";

interface ItemCountProps {
  product: Product;
  onAdd: (quantity: number) => void;
}

function ItemCount({ product, onAdd }: ItemCountProps) {
  const [count, setCount] = useState(1);
  // Usamos el stock del producto si existe, sino 10 por defecto
  const stock = product.stock || 10; 

  const handleAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleSub = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <div className="count-controls">
        <button onClick={handleSub} className="btn-count">-</button>
        <span className="count-number">{count}</span>
        <button onClick={handleAdd} className="btn-count">+</button>
      </div>
      
      <button 
        className="btn-add-to-cart"
        onClick={() => onAdd(count)} // Aquí ejecutamos la función que viene del padre
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
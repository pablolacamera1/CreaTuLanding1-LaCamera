import { Product } from "../data/products";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext"; 

interface ItemDetailProps {
  product: Product;
}

function ItemDetail({ product }: ItemDetailProps) {
  const { addItem } = useCart(); 

  const onAdd = (quantity: number) => {
    
    addItem(product, quantity); 
    console.log("Producto agregado:", product.title, "Cantidad:", quantity);
  };

  return (
    <div className="item-detail-container">
      <article className="item-detail">
        <div className="info-side">
          <h2>{product.artist} - {product.title}</h2>
          <p>{product.description}</p>
          <span className="price">${product.price}</span>
          
          <div className="controls-wrapper">
             <ItemCount product={product} onAdd={onAdd} />
          </div>
        </div>
      </article>
    </div>
  );
}

export default ItemDetail;
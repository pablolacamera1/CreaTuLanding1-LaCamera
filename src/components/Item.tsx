import { Link } from "react-router-dom";
import { Product } from "../data/products";
import "./item.css";

interface ItemProps {
  product: Product;
}

function Item({ product }: ItemProps) {
  return (
    <div className="item-card">
      <div style={{ 
        width: '100%', 
        aspectRatio: '1/1', 
        backgroundColor: '#333', 
        borderRadius: '8px',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#555',
        fontSize: '0.8rem'
      }}>
        SIN IMAGEN
      </div>
      
      <h3>{product.artist} - {product.title}</h3>
      <p className="price">${product.price}</p>

      <Link to={`/item/${product.id}`} className="ver-detalle-btn">
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;
import { Link } from "react-router-dom";
import { Product } from "../data/products";
import "./item.css";

interface ItemProps {
  product: Product;
}

function Item({ product }: ItemProps) {
  return (
    <div className="item-card">
      <img
        src={product.img}
        alt={product.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "15px",
        }}
      />

      <h3>
        {product.artist} – {product.title}
      </h3>

      <p className="price">${product.price}</p>

      <Link to={`/item/${product.id}`} className="ver-detalle-btn">
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;

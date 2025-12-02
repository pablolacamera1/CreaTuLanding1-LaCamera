interface Props {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

function ItemDetail({ product }: Props) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
    </div>
  );
}

export default ItemDetail;
import "./ItemDetail.css";

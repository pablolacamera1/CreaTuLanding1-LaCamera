import { Product } from "../data/products";
import Item from "./Item";

interface ItemListProps {
  products: Product[];
}

function ItemList({ products }: ItemListProps) {
  return (
    <div className="container">
      <h2 style={{ marginBottom: '20px', color: '#ffcc00' }}>Catálogo de Discos</h2>
      <div className="item-grid">
        {products.map(product => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
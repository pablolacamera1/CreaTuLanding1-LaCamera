import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartWidget() {
  const { getTotalQuantity } = useCart();
  const total = getTotalQuantity();

  return (
    <Link to="/cart" className="cart-widget">
      <span className="cart-icon">🛒</span>
      {total > 0 && <span className="cart-badge">{total}</span>}
    </Link>
  );
}

export default CartWidget;
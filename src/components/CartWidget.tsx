// src/components/CartWidget.tsx
function CartWidget() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span role="img" aria-label="cart">🛒</span>
      <span>3</span>
    </div>
  );
}

export default CartWidget;

import { useState } from "react";
import { Timestamp } from "firebase/firestore";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/orders";

function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const order = {
      buyer: {
        name: formData.get("name") as string,
        phone: formData.get("phone") as string,
        email: formData.get("email") as string,
      },
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total: getTotalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    const id = await createOrder(order);
    setOrderId(id);
    clearCart();
    setLoading(false);
  };

  if (orderId) {
    return (
      <div>
        <h3>¡Gracias por tu compra!</h3>
        <p>
          Tu número de orden es: <strong>{orderId}</strong>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" required />
      <input name="phone" placeholder="Teléfono" required />
      <input name="email" placeholder="Email" required />
      <button type="submit" disabled={loading || cart.length === 0}>
        {loading ? "Procesando..." : "Finalizar compra"}
      </button>
    </form>
  );
}

export default CheckoutForm;

// src/components/ShoppingCart.js
import React, { useState } from "react";
import PaymentForm from "./PaymentForm"; // Importa el nuevo componente

const ShoppingCart = ({ cart, adjustQuantity, calculateTotal, checkout }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const handleCheckoutClick = () => {
    // Cambia el estado para mostrar el formulario de pago
    setIsCheckingOut(true);
  };

  const handlePaymentComplete = () => {
    // Reseteo el estado para ocultar el formulario de pago después de la confirmación
    setIsCheckingOut(false);
    setCheckoutComplete(true);

    alert("Compra confirmada. Total: $" + calculateTotal());
    
    // Vacía el carrito después de la compra (puedes hacerlo aquí si es necesario)
    // setCart([]);
  };

  // Verifica si el carrito está vacío o el proceso de pago está completo
  if (cart.length === 0 || checkoutComplete) {
    return <p>Carrito vacío</p>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - Cantidad: {item.quantity} - Subtotal: $
            {item.quantity * item.product.price}
            <button onClick={() => adjustQuantity(item.product, "increment")}>
              +
            </button>
            <button onClick={() => adjustQuantity(item.product, "decrement")}>
              -
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      {isCheckingOut ? ( // Muestra PaymentForm si se está realizando el pago
        <PaymentForm onComplete={handlePaymentComplete} />
      ) : (
        <button onClick={handleCheckoutClick}>Proceder al Pago</button>
      )}
    </div>
  );
};

export default ShoppingCart;

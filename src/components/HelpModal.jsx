// src/components/HelpModal.jsx
import React from "react";

const HelpModal = ({ onClose }) => {
  return (
    <div className="help-modal">
      <h2>¡Bienvenido a la aplicación de carrito de compras!</h2>
      <p>
        Para agregar productos al carrito, simplemente haz clic en el botón
        "Agregar al Carrito" en la lista de productos.
      </p>
      <p>
        Puedes ajustar la cantidad de productos en el carrito utilizando los
        botones "+" y "-".
      </p>
      <p>
        Cuando estés listo para realizar el pago, haz clic en "Proceder al Pago"
        y sigue las instrucciones en el formulario de pago.
      </p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default HelpModal;

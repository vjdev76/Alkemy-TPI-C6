import React, { useState } from "react";
import "./PaymentForm.css";

const PaymentForm = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const formatCardNumber = (value) => {
    return value
      .replace(/[^0-9]/g, "")
      .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4")
      .slice(0, 19);
  };

  const formatExpirationDate = (value) => {
    return value
      .replace(/[^0-9/]/g, "")
      .replace(/(\d{2})(\d{2})/, "$1/$2")
      .slice(0, 5);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formattedValue =
      name === "cardNumber" ? formatCardNumber(value) : formatExpirationDate(value);

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
    setErrors({
      ...errors,
      [name]: "", // Limpiar el error al editar el campo
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar validaciones
    const newErrors = {};
    if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Número de tarjeta inválido";
    }
    if (!/^\d{2}\/\d{2}$/.test(formData.expirationDate)) {
      newErrors.expirationDate = "Formato de fecha inválido (MM/YY)";
    }
    if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = "CVV inválido";
    }

    if (Object.keys(newErrors).length === 0) {
      // No hay errores, continuar con el proceso de pago
      onComplete();
    } else {
      // Hay errores, actualizar el estado de errores
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="form-row">
        <label>
          Número de Tarjeta:
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
          />
          {errors.cardNumber && <span>{errors.cardNumber}</span>}
        </label>
      </div>
      <div className="form-row">
        <label>
          Exp. Date:
          <input
            type="text"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
          />
          {errors.cvv && <span>{errors.cvv}</span>}
        </label>
      </div>
      <button type="submit">Pagar</button>
    </form>
  );
};

export default PaymentForm;




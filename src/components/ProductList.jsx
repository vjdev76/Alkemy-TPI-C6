import React, { useState, useEffect } from "react";
import "./ProductList.css";

const ProductList = ({ products, addToCart }) => {
  const [currency, setCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch("https://api.bluelytics.com.ar/v2/latest");
        const data = await response.json();

        // Obtengo la cotizacion
        const rate =
          currency === "USD" ? data.oficial.value_sell : data.blue.value_sell;

        setExchangeRate(rate);
      } catch (error) {
        console.error("Error al obtener la tasa de cambio:", error);
      }
    };

    fetchExchangeRate();
  }, [currency]);

  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === "USD" ? "ARS" : "USD"));
  };

  return (
    <div className="product-list">
      <div className="currency-info-container">
        <button onClick={toggleCurrency}>
          {currency === "USD" ? "USD" : "ARS"}
        </button>
        <p>
          {currency === "USD"
            ? "Haga clic en el botón para ver el precio en Pesos Argentinos."
            : "Haga clic en el botón para volver al precio en Dólares."}
        </p>
      </div>
      <h2>Productos Disponibles</h2>
      <div className="cards-container">
        {products.map((product, index) => (
          <div key={product.id} className="product-card">
            <img
              src={`/src/assets/images/${product.image}`}
              alt={product.name}
            />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>
                {currency === "USD"
                  ? `$${product.price.toFixed(2)}`
                  : `$${(product.price * exchangeRate).toFixed(2)}`}
              </p>
              <button onClick={() => addToCart(product)}>
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

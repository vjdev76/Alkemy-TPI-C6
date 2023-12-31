import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import HelpModal from "./components/HelpModal";
import "./App.css";

function App({ products }) {
  const [cart, setCart] = useState([]);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const adjustQuantity = (product, type) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity:
                  type === "increment"
                    ? item.quantity + 1
                    : Math.max(0, item.quantity - 1),
              }
            : item
        )
        .filter((item) => item.quantity > 0); // Filtrar elementos con cantidad mayor que 0
    });
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    );
  };

  const checkout = () => {
    // Aca iria la logica del checkout
    alert("Compra confirmada. Total: $" + calculateTotal());
  };

  const toggleHelpModal = () => {
    setShowHelpModal((prevShowHelpModal) => !prevShowHelpModal);
  };

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart
        cart={cart}
        adjustQuantity={adjustQuantity}
        calculateTotal={calculateTotal}
        checkout={checkout}
      />
      {showHelpModal && <HelpModal onClose={toggleHelpModal} />}
      {!showHelpModal && (
        <button onClick={toggleHelpModal}>Mostrar Ayuda</button>
      )}
    </div>
  );
}

export default App;

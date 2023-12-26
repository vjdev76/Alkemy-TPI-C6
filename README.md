# Informe de Funcionalidades - Aplicación de Compras - Trabajo Práctico Integrador - Alkemy C6 🚀

## App.jsx * Componente principal de la aplicación.

Funcionalidad:

- Muestra la lista de productos disponibles y el carrito de compras.
- Permite agregar productos al carrito.
- Permite ajustar la cantidad de productos en el carrito.
- Calcula el total de la compra.
- Simula un proceso de pago con confirmación de compra.

## ProductList.jsx * Componente que muestra la lista de productos disponibles.

- Presenta la lista de productos con imágenes, nombres y precios.
- Convierte los precios a la moneda seleccionada (USD o ARS) utilizando una API para obtener la cotización actual del dólar.
- Permite cambiar entre USD y ARS (no se actualiza en precio en el carrito, este ultimo solo opera con el monto en dolares)

## ShoppingCart.js * Componente que muestra y gestiona el carrito de compras.

Funcionalidad:

- Muestra la lista de productos en el carrito con cantidad, subtotal y botones para ajustar la cantidad.
- Calcula y muestra el total del carrito.
- Permite proceder al pago y muestra el formulario de pago.
- Simula un proceso de pago con confirmación de compra.

## PaymentForm.jsx * Componente que presenta un formulario de pago.

Funcionalidad:

- Recoge información de la tarjeta de crédito (número, fecha de expiración, CVV).
- Realiza validaciones en tiempo real y muestra mensajes de error.
- Simula un proceso de pago con confirmación.

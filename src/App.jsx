import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {

  // Cart state
  const [cart, setCart] = useState([]);

  // Product data
  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      price: 5000,
      category: "Footwear",
      discount: 20,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },

    {
      id: 2,
      name: "Smart Watch",
      price: 3500,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },

    {
      id: 3,
      name: "T-Shirt",
      price: 1500,
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },

    {
      id: 4,
      name: "Laptop",
      price: 80000,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },

    {
      id: 5,
      name: "Headphones",
      price: 15000,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
  ];

  // Add product to cart
  const handleAddToCart = (product) => {
    setCart((previousCart) => {

      // Check if product already exists
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      // If product exists, increase quantity
      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      // If product doesn't exist, add it
      return [
        ...previousCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Increase quantity
  const increaseQuantity = (productId) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (productId) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
  setCart((previousCart) =>
    previousCart.filter(
      (item) => item.id !== productId
    )
  );
};

  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar cartCount={cart.length} />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <Home
              products={products}
              onAddToCart={handleAddToCart}
            />
          }
        />

        {/* Shop */}
        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              onAddToCart={handleAddToCart}
            />
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
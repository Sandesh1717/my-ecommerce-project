import { useEffect, useState } from "react";
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
import Checkout from "./pages/Checkout";

import { fetchProducts } from "./api/product";

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    } catch (error) {
      console.error("Failed to load cart:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const [apiProducts, setApiProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();

        console.log("API Products:", response.data);

        setApiProducts(
          response.data.products.map((product) => ({
            id: product.id,
            name: product.title,
            price: product.price,
            category: product.category,
            image: product.thumbnail,
          }))
        );
      } catch (error) {
        console.error(
          "Failed to fetch products:",
          error
        );
      }
    };

    getProducts();
  }, []);

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
    {
      id: 6,
      name: "Gaming Mouse",
      price: 2500,
      category: "Electronics",
      discount: 10,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db",
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      price: 6500,
      category: "Electronics",
      discount: 15,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      price: 4500,
      category: "Electronics",
      discount: 10,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    },
    {
      id: 9,
      name: "Hoodie",
      price: 2800,
      category: "Clothing",
      discount: 20,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    },
    {
      id: 10,
      name: "Jeans",
      price: 3000,
      category: "Clothing",
      discount: 10,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d",
    },
    {
      id: 11,
      name: "Running Shoes",
      price: 4500,
      category: "Footwear",
      discount: 15,
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3",
    },
    {
      id: 12,
      name: "Backpack",
      price: 2200,
      category: "Accessories",
      discount: 10,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
    {
      id: 13,
      name: "Sunglasses",
      price: 1800,
      category: "Accessories",
      discount: 20,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },
    {
      id: 14,
      name: "Wallet",
      price: 1200,
      category: "Accessories",
      discount: 10,
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93",
    },
    {
      id: 15,
      name: "Gaming Chair",
      price: 25000,
      category: "Furniture",
      discount: 15,
      image:
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
    },
  ];

  const handleAddToCart = (product) => {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

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

      return [
        ...previousCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

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

  const decreaseQuantity = (productId) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === productId &&
        item.quantity > 1
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

  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter>
      <Navbar
        cartCount={cart.reduce(
          (total, item) =>
            total + item.quantity,
          0
        )}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              onAddToCart={handleAddToCart}
            />
          }
        />

        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              onAddToCart={handleAddToCart}
            />
          }
        />

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

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              clearCart={clearCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
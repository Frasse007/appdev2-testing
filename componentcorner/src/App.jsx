import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

function App() {
  const [products] = useState([
    { 
      id: 1, 
      itemname: "Wireless Headphones", 
      price: 99.99, 
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    { 
      id: 2, 
      itemname: "Smart Watch", 
      price: 249.99, 
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    { 
      id: 3, 
      itemname: "Bluetooth Speaker", 
      price: 79.99, 
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    { 
      id: 4, 
      itemname: "Laptop Stand", 
      price: 49.99, 
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    { 
      id: 5, 
      itemname: "Webcam", 
      price: 129.99, 
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    { 
      id: 6, 
      itemname: "Mechanical Keyboard", 
      price: 159.99, 
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ]);

  // Load initial cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('shopping_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.warn('Could not load cart from localStorage:', error);
      return [];
    }
  });

  // Save cart changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('shopping_cart', JSON.stringify(cart));
    } catch (error) {
      console.warn('Could not save cart to localStorage:', error);
    }
  }, [cart]);

  // Functions to add/remove items from cart
  const addToCart = (product) => {
    const itemToAdd = { ...product, cartItemId: Date.now() + Math.random() };
    setCart((prevCart) => [...prevCart, itemToAdd]);
  }

  const removeFromCart = (cartItemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartItemId !== cartItemId));
  };

  return (
    <BrowserRouter>
      <Header storeName="Component Corner" products="Products" contact="Contact" about="About" cartCount={cart.length}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage products={products} addToCart={addToCart} />} />
        <Route path="/products/:id" element={<ProductDetailsPage products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
      <Footer storeName="Component Corner" description="Providing top-quality tech accessories and hardware components for your mobile setup." contactEmail="support@componentcorner.com" contactPhone="(555) 019-2834" copyright="Component Corner Inc"/>   
    </BrowserRouter>
  );
}

export default App

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Cart from './components/Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
   // Fetch Products
   const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(()=>{
    fetchProducts();
  },[]);
   // Add to Cart Handler
   const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);
    if (isAlreadyInCart) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  // Remove from Cart Handler
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  return (
  <div>
      <Navbar cartCount={cart.length} onCartClick={() => setIsModalOpen(true)}/>
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>
           {products.map((product) => (
      <Product
           key={product.id}
           product={product}
           onAddToCart={() => handleAddToCart(product)}
      />
      ))}
      </div>
           {isModalOpen && (
      <Cart
           cart={cart}
           onClose={() => setIsModalOpen(false)}
           onRemoveFromCart={handleRemoveFromCart}
      />
      )}
  </div>
  );
};

export default App;
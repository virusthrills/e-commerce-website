import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { Footer } from './components/footer/Footer';
import { products } from './data/products';

export function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Featured Products</h1>
            <button
              onClick={() => setShowCart(!showCart)}
              className="text-indigo-600 hover:text-indigo-800"
            >
              {showCart ? 'View Products' : 'View Cart'}
            </button>
          </div>
          
          {showCart ? (
            <Cart />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
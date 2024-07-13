import React, { createContext, useContext, useState } from 'react';

// Define a type for your product data
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  photos: string[];
};

// Define a type for your context data including cart functionality
type ProductContextType = {
  data: Product[];
  cart: Product[];
  setData: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
};

// Create a context with initial empty data and cart
const ProductContext = createContext<ProductContextType>({
  data: [],
  cart: [],
  setData: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

// Export a provider to wrap your components
export const ProductProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Function to add a product to the cart
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <ProductContext.Provider
      value={{ data, setData, cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Export useContext hook for functional components
export const useProductContext = () => useContext(ProductContext);

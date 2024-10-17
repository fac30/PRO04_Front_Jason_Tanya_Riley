import React, { createContext, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price?: number;  // Make price optional
  category: string;
  activity: string;
  strapline: string;
  description: string;
}

interface StoreContextType {
  view: string;
  setView: (view: string) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  fetchProductById: (id: number) => Promise<void>;
}

export const StoreContext = createContext<StoreContextType>({
  view: 'landing',
  setView: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
  searchTerm: '',
  setSearchTerm: () => {},
  fetchProductById: async () => {},
});

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [view, setView] = useState('landing');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProductById = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const product = await response.json();
      setSelectedProduct(product);
    } catch (error) {
      console.error('Error fetching product:', error);
      setSelectedProduct(null);
    }
  };

  return (
    <StoreContext.Provider value={{ 
      view, 
      setView, 
      selectedProduct, 
      setSelectedProduct, 
      searchTerm, 
      setSearchTerm,
      fetchProductById
    }}>
      {children}
    </StoreContext.Provider>
  );
};

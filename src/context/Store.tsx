import React, { createContext, useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
	photo_link: string;
  strapline: string;
  description: string;
	stock_level: number;
	location: number;
	orders: number;
	reviews: number | null;
  activity: number;
  price?: number;
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
	
	const handleSetView = (newView: string) => {
		console.log(`[${new Date().toISOString()}] Setting view to:`, newView);
		setView(newView);
	};

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProductById = async (id: number) => {
    try {
      const response = await fetch(`https://crafts-crafts.onrender.com/products/${id}`);
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
      setView: handleSetView, 
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

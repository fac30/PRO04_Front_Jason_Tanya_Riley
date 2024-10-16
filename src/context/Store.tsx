import React, { createContext, useState } from 'react';

interface StoreContextType {
  view: string;
  setView: (view: string) => void;
  selectedProduct: any;
  setSelectedProduct: (product: any) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const StoreContext = createContext<StoreContextType>({
  view: 'landing',
  setView: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
  searchTerm: '',
  setSearchTerm: () => {},
});

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [view, setView] = useState('landing');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <StoreContext.Provider value={{ view, setView, selectedProduct, setSelectedProduct, searchTerm, setSearchTerm }}>
      {children}
    </StoreContext.Provider>
  );
};


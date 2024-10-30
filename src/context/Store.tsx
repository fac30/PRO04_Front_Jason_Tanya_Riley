import React, { createContext, useEffect, useState } from 'react';
import { useEnv } from './Environment';

/**
 * ${1:Description placeholder}
 *
 * @interface Product
 * @typedef {Product}
 */
interface Product {
  /**
 * ${1:Description placeholder}
 *
 * @type {number}
 */
id: number;
  /**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
name: string;
	/**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
photo_link: string;
  /**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
strapline: string;
  /**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
description: string;
	/**
 * ${1:Description placeholder}
 *
 * @type {number}
 */
stock_level: number;
	/**
 * ${1:Description placeholder}
 *
 * @type {number}
 */
location: number;
	/**
 * ${1:Description placeholder}
 *
 * @type {number}
 */
orders: number;
	/**
 * ${1:Description placeholder}
 *
 * @type {(number | null)}
 */
reviews: number | null;
  /**
 * ${1:Description placeholder}
 *
 * @type {number}
 */
activity: number;
  /**
 * ${1:Description placeholder}
 *
 * @type {?number}
 */
price?: number;
}

/**
 * ${1:Description placeholder}
 *
 * @interface StoreContextType
 * @typedef {StoreContextType}
 */
interface StoreContextType {
  /**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
view: string;
  /**
 * ${1:Description placeholder}
 *
 * @type {(view: string) => void}
 */
setView: (view: string) => void;
  /**
 * ${1:Description placeholder}
 *
 * @type {(Product | null)}
 */
selectedProduct: Product | null;
  /**
 * ${1:Description placeholder}
 *
 * @type {(product: Product | null) => void}
 */
setSelectedProduct: (product: Product | null) => void;
  /**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
searchTerm: string;
  /**
 * ${1:Description placeholder}
 *
 * @type {(term: string) => void}
 */
setSearchTerm: (term: string) => void;
  /**
 * ${1:Description placeholder}
 *
 * @type {(id: number) => Promise<void>}
 */
fetchProductById: (id: number) => Promise<void>;
}

/**
 * ${1:Description placeholder}
 *
 * @type {${2:*}}
 */
export const StoreContext = createContext<StoreContextType>({
  view: 'landing',
  setView: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
  searchTerm: '',
  setSearchTerm: () => {},
  fetchProductById: async () => {},
});

/**
 * ${1:Description placeholder}
 *
 * @param {{ children: any; }} param0
 * @param {${2:*}} param0.children
 * @returns {${3:*}\}
 */
export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [view, setView] = useState('landing');
	const { serverURL } = useEnv();
	
	const handleSetView = (newView: string) => {
		console.log(`[${new Date().toISOString()}] Setting view to:`, newView);
		setView(newView);
	};

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProductById = async (id: number) => {
    try {
      const response = await fetch(`${serverURL}/products/${id}`);
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

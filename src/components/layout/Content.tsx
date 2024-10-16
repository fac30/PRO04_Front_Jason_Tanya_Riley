import React, { useContext } from 'react';
import { StoreContext } from '../../context/Store';
import { LandingView } from '../view/Landing';
import { SearchView } from '../view/Search';
import { ProductView } from '../view/Product';

// Mock data for products
const products = [
  { id: 1, name: 'Paint Brush Set', price: 19.99, category: 'Art Supplies' },
  { id: 2, name: 'Model Train Kit', price: 89.99, category: 'Model Building' },
  { id: 3, name: 'Gardening Tools Set', price: 34.99, category: 'Gardening' },
  { id: 4, name: 'Chess Board', price: 29.99, category: 'Board Games' },
  { id: 5, name: 'Yarn Collection', price: 24.99, category: 'Knitting' },
];

function Content() {
  const { view, selectedProduct, searchTerm } = useContext(StoreContext);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {view === 'landing' && <LandingView />}
      {view === 'search' && <SearchView products={filteredProducts} />}
      {view === 'product' && <ProductView product={selectedProduct} />}
    </div>
  );
}

export default Content;

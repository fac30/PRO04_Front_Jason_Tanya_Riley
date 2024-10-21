import React, { useContext, useEffect } from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { StoreContext } from '../../context/Store';

export function ProductView() {
  const { setView, selectedProduct } = useContext(StoreContext);

  useEffect(() => {
    if (!selectedProduct) {
      setView('search');
    }
  }, [selectedProduct, setView]);

  if (!selectedProduct) return null;

  return (
    <section>
      <button onClick={() => setView('search')} className="mb-4">
        <ArrowLeft className="h-6 w-6" />
      </button>
      <div className="bg-accent-0 p-4 rounded-lg border border-accent-1 shadow-md shadow-accent-4/30 cursor-pointer">
        <div className="bg-gray-200 h-64 mb-4 rounded flex items-center justify-center">
          <ShoppingBag className="h-24 w-24 text-gray-400" />
        </div>
        <h2 className="text-primary-5 text-2xl font-bold mb-2">{selectedProduct.name} - {selectedProduct.activity}</h2>
        <p className="text-primary-4 mb-2">{selectedProduct.strapline}</p>
        <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
        <p className="text-xl font-bold mb-4">
          {selectedProduct.price !== undefined 
            ? `$${selectedProduct.price.toFixed(2)}` 
            : 'Price not available'}
        </p>
        <button className="button-bonbon">
          Add to Cart
        </button>
      </div>
    </section>
  );
}

// Card
	// Old: bg-white p-6 rounded-lg shadow
	// New: bg-accent-0 p-4 rounded-lg border border-accent-1 shadow-md shadow-accent-4/30 cursor-pointer


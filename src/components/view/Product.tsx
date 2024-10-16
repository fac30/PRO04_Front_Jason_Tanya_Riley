import React, { useContext } from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { StoreContext } from '../../context/Store';

interface Product {
  name: string;
  category: string;
  price: number;
}

export function ProductView({ product }: { product: Product | null }) {
  const { setView } = useContext(StoreContext);

  if (!product) return null;

  return (
    <div>
      <button onClick={() => setView('search')} className="mb-4">
        <ArrowLeft className="h-6 w-6" />
      </button>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="bg-gray-200 h-64 mb-4 rounded flex items-center justify-center">
          <ShoppingBag className="h-24 w-24 text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.category}</p>
        <p className="text-xl font-bold mb-4">${product.price.toFixed(2)}</p>
        <button className="w-full bg-blue-500 text-white py-2 rounded-full text-lg hover:bg-blue-600 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}


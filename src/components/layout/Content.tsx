import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/Store';
import { LandingView } from '../view/Landing';
import { SearchView } from '../view/Search';
import { ProductView } from '../view/Product';

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
  activities: number;
  price?: number;
}

function Content() {
  const { view, searchTerm } = useContext(StoreContext);
  const [ products, setProducts ] = useState<Product[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => { fetchProducts(); }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load products. Please try again later.');
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="flex flex-col w-full h-full bg-primary-A">
      <div className='container w-full mx-auto px-4 py-8 flex-1'>
        {view === 'landing' && <LandingView />}
        {view === 'search' && <SearchView products={filteredProducts} />}
        {view === 'product' && <ProductView />}
      </div>
    </main>
  );
}

export default Content;

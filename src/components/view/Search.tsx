import React, { useContext } from 'react';
import { Search, ShoppingBag, ArrowLeft } from 'lucide-react';
import { StoreContext } from '../../context/Store';
import { SearchHeader } from './SearchHeader';
import { ProductGallery } from '../displays/ProductGallery';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  activity: string;
  strapline: string;
}

export function SearchView({ products }: { products: Product[] }) {
  const { setView, fetchProductById, setSearchTerm } = useContext(StoreContext);

  return (
    <section>
			<SearchHeader />
      <ProductGallery products={products} />
    </section>
  );
}

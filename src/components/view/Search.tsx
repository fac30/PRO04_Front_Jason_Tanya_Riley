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
  return (
    <section>
			<SearchHeader />
      <ProductGallery products={products} />
    </section>
  );
}

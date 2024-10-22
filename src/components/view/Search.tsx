import { SearchHeader } from './SearchHeader';
import { ProductGallery } from '../dataDisplays/ProductGallery';

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

export function SearchView({ products }: { products: Product[] }) {
  return (
    <section>
			<SearchHeader />
      <ProductGallery products={products} />
    </section>
  );
}

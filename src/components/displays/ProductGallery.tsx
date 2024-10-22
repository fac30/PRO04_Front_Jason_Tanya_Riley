import React, { useContext } from 'react';
import { ShoppingBag } from 'lucide-react';
import { StoreContext } from '../../context/Store';
import { activity } from '../../dummy/activities';

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

export function ProductGallery({ products }: { products: Product[] }) {
  const { setView, fetchProductById } = useContext(StoreContext);

  const handleProductClick = async (productId: number) => {
    await fetchProductById(productId);
    setView('product');
  };

  return (
    <div className="grid grid-cols-2 gap-4">
			{products && products.length > 0 ? (
				products.map((product: Product) => (
					<div key={product.id} className="product-card" onClick={ 
						() => handleProductClick(product.id)
					}>
						<div className="product-card-img">
							<ShoppingBag className="h-12 w-12 text-gray-400" />
						</div>
						
						<div>
							<div>
								<p className="font-semibold text-center">
									{product.name}
								</p>
							</div>

							<hr />

							<div>
								<p className="text-sm text-gray-600 text-center">
									{product.strapline}
								</p>
							</div>
							
							<hr />

							<div className='flex justify-between'>
								<p className="text-sm italic text-gray-600">
									{activity(product.activities)}
								</p>

								<p className="text-sm text-gray-600">
									{product.reviews === null ? "No Reviews" : "Error"}
								</p>
							</div>
						</div>

						<p className="mt-2 font-bold">
							£{product.price?.toFixed(2) || '9.99'}
						</p>
					</div>
				))
			) : (
				<p>No products found.</p>
			)}
		</div>
  );
}
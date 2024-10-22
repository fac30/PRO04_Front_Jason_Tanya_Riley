import React, { useContext } from 'react';
import { Search, ShoppingBag, ArrowLeft } from 'lucide-react';
import { StoreContext } from '../../context/Store';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  activity: string;
  strapline: string;
}

export function ProductGallery({ products }: { products: Product[] }) {
  const { setView, fetchProductById, setSearchTerm } = useContext(StoreContext);

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
							<p className="font-semibold">{product.name} - {product.activity}</p>
							<p className="text-sm text-gray-600">{product.strapline}</p>
							<p className="mt-2 font-bold">${product.price?.toFixed(2) || 'N/A'}</p>
						</div>
					</div>
				))
			) : (
				<p>No products found.</p>
			)}
		</div>
  );
}
import React, { useContext } from 'react';
import { Search, ShoppingBag, ArrowLeft } from 'lucide-react';
import { StoreContext } from '../../context/Store';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export function SearchView({ products }: { products: Product[] }) {
  const { setView, setSelectedProduct, setSearchTerm } = useContext(StoreContext);

  return (
    <section>
			<div>
				<div className="prose">
					<h2>Product List</h2>
				</div>

				<div className="flex items-center mb-4">
					<button onClick={() => setView('landing')} className="mr-2">
						<ArrowLeft className="h-6 w-6" />
					</button>
					<div className="relative flex-grow">
						<input
							type="text"
							placeholder="Search products..."
							className="w-full p-2 pr-10 rounded-full border border-accent-0 shadow-md shadow-primary-5/20"
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
					</div>
				</div>
			</div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="bg-accent-0 p-4 rounded-lg border border-accent-1 shadow-md shadow-accent-4/30 cursor-pointer"
            onClick={() => {
              setSelectedProduct(product);
              setView('product');
            }}
          >
            <div className="bg-white h-32 mb-2 rounded flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
						<div>
							<p className="font-semibold">{product.name}</p>
							<p className="text-sm text-gray-600">{product.category}</p>
							<p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
						</div>
          </div>
        ))}
      </div>
    </section>
  );
}

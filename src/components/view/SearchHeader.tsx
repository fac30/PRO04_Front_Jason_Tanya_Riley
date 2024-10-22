import { useContext } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import { StoreContext } from '../../context/Store';

export function SearchHeader() {
  const { setView, setSearchTerm } = useContext(StoreContext);

  return (
    <div>
			<div id="search-header" className="prose">
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
	);
}

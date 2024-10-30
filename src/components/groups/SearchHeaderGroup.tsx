import { useContext } from 'react';
import { 
	Search as SearchIcon,
	ArrowLeft as ArrowLeftIcon 
} from 'lucide-react';
import { StoreContext } from '../../context/Store';

/**
 * ${1:Description placeholder}
 *
 * @export
 * @returns {${2:*}}
 */
export function SearchHeader() {
  const { setView, setSearchTerm } = useContext(StoreContext);

  return (
    <div>
			<div className="prose">
				<h2>Product List</h2>
			</div>

			<div className="flex items-center mb-4">
				<button className="mr-2" onClick={
					() => setView('landing')}
				>
					<ArrowLeftIcon className="h-6 w-6" />
				</button>

				<div className="relative flex flex-grow items-center">
					<input type="text" className="flex-grow rounded-md" onChange={
						(e) => setSearchTerm(e.target.value)
					}/>
					
					<SearchIcon className="flex-grow-0 right-3 top-2.5 h-5 w-5 text-gray-400" />
				</div>
			</div>
		</div>
	);
}

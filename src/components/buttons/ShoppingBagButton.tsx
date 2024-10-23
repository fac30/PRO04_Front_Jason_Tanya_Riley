import { useContext } from 'react'
import { StoreContext } from '../../context/Store';
import { ShoppingBag } from "lucide-react";

function ShoppingBagButton() {
  const { setView } = useContext(StoreContext);

	return(
		<button 
			/* onClick={() => setView('landing')}  */
			className='mr-2 text-primary-A hover:text-primary-0 transition-colors'
			aria-label="Go to home page"
		>
			<ShoppingBag className="h-6 w-6" />
		</button>
	)
}

export default ShoppingBagButton
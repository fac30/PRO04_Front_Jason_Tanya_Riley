import { useUser } from '../../context/User';
import ShoppingBagButton from '../buttons/ShoppingBagButton';

function CartQuantum () {
	const { isLoggedIn } = useUser();

  return (
		<>
			{isLoggedIn ? <ShoppingBagButton /> : ''}
		</>
	)
}

export default CartQuantum
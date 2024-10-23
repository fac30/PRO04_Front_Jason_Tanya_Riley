import { useUser } from '../../context/User';
import ShoppingBagButton from '../buttons/ShoppingBagButton';

function CartButtonQuantum () {
	const { isLoggedIn } = useUser();

  return (
		<>
			{isLoggedIn ? <ShoppingBagButton /> : ''}
		</>
	)
}

export default CartButtonQuantum;
import { useUser } from '../../context/User';
import ShoppingBagButton from '../buttons/ShoppingBagButton';

/**
 * ${1:Description placeholder}
 *
 * @returns {${2:*}}
 */
function CartButtonQuantum () {
	const { isLoggedIn } = useUser();

  return (
		<>
			{isLoggedIn ? <ShoppingBagButton /> : ''}
		</>
	)
}

export default CartButtonQuantum;
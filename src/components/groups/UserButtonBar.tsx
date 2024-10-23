import ShoppingBagButton from '../buttons/ShoppingBagButton';
import CartQuantum from '../quantum/CartQuantum';
import LogQuantum from '../quantum/LogQuantum';

function UserButtonBar() {
	return (
		<div>
			<CartQuantum />
			<LogQuantum />
		</div>
	)
}

export default UserButtonBar
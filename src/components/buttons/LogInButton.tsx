import { useContext } from 'react'
import { useUser } from '../../context/User'
import { StoreContext } from '../../context/Store';
import { LogInIcon } from "lucide-react"

/**
 * ${1:Description placeholder}
 *
 * @returns {${2:*}}
 */
function LogInButton() {
	const { setView, view } = useContext(StoreContext);
	const { isLoggedIn } = useUser();

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		console.log(`Login Button clicked by ${isLoggedIn ? 'logged in' : 'logged out'} user`);
		setView('login');
	}

	return (
		<button id='logInButton' className='mr-2 text-primary-A hover:text-primary-B transition-colors'
		onClick={ handleClick }>
			<LogInIcon className="h-6 w-6" />
		</button>
	)
}

export { LogInButton };

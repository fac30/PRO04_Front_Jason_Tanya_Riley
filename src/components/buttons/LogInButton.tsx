import { useContext } from 'react'
import { StoreContext } from '../../context/Store';
import { useUser } from '../../context/User';
import { LogInIcon } from "lucide-react"

function LogInButton() {
	const { setView } = useContext(StoreContext);
	const { setIsLoggedIn } = useUser();

	return (
		<button
		className='mr-2 text-primary-A hover:text-primary-0 transition-colors'
		/* onClick={() => setIsLoggedIn(true)} */ onClick={() => setView('login')}
		>
			<LogInIcon className="h-6 w-6" />
		</button>
	)
}

export default LogInButton
import { useContext } from 'react'
import { StoreContext } from '../../context/Store';
import { LogInIcon } from "lucide-react"

function LogInButton() {
	const { setView, view } = useContext(StoreContext);

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		console.log(`[${new Date().toISOString()}] Current view before click:`, view);
		console.log(`[${new Date().toISOString()}] Login Button clicked`);
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

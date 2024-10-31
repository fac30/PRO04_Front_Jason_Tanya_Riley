import { useContext } from 'react'
import { useEnv } from '../../context/Environment';
import { StoreContext } from '../../context/Store';
import { useUser } from '../../context/User'
import { LogOut } from "lucide-react"

function LogOutButton() {
	const { serverURL } = useEnv();
	const { setView } = useContext(StoreContext);
	const { isLoggedIn, setIsLoggedIn } = useUser();

	function handleLogOut(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		
		switch (isLoggedIn) {
			case true:
				setIsLoggedIn(false);
				alert('Logged Out');
				setView('landing');
				break;
			default:
				alert('Not Logged In. Please refresh your browser.');
				break;
		}
	}

	return (
		<button
		className='mr-2 text-primary-A hover:text-primary-0 transition-colors'
		onClick={handleLogOut}
		>
			<LogOut className="h-6 w-6" />
		</button>
	)
}

export default LogOutButton
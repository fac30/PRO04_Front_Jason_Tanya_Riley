import { LogOut } from "lucide-react"
import { useUser } from '../../context/User'

function LogOutButton() {
	const { setIsLoggedIn } = useUser();

	return (
		<button
		className='mr-2 text-primary-A hover:text-primary-0 transition-colors'
		onClick={() => setIsLoggedIn(false)}
		>
			<LogOut className="h-6 w-6" />
		</button>
	)
}

export default LogOutButton
import { LogIn } from "lucide-react"
import { useUser } from '../../context/User'

function LogInButton() {
	const { setIsLoggedIn } = useUser();

	return (
		<button
		className='mr-2 text-primary-A hover:text-primary-0 transition-colors'
		onClick={() => setIsLoggedIn(true)}
		>
			<LogIn className="h-6 w-6" />
		</button>
	)
}

export default LogInButton
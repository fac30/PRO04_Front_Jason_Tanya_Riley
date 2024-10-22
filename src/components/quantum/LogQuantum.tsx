import { useUser } from '../../context/User'
import LogOutButton from '../buttons/LogOutButton'

function LogQuantum () {
	const { isLoggedIn, setIsLoggedIn } = useUser();

  return (
		<>
			{isLoggedIn ? <LogOutButton /> : (
				<button className="button-bonbon" onClick={
					() => setIsLoggedIn(true)}
				>Login</button>
			)}
		</>
	)
}

export default LogQuantum
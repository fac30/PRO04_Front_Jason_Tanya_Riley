import { useUser } from '../../context/User'
import LogInButton from '../buttons/LogInButton';
import LogOutButton from '../buttons/LogOutButton'

function LogQuantum () {
	const { isLoggedIn } = useUser();

  return (
		<>
			{isLoggedIn ? <LogOutButton /> : <LogInButton />}
		</>
	)
}

export default LogQuantum
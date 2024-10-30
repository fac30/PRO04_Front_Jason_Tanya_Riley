import { useUser } from '../../context/User'
import { LogInButton } from '../buttons/LogInButton';
import LogOutButton from '../buttons/LogOutButton'

/**
 * ${1:Description placeholder}
 *
 * @returns {${2:*}}
 */
function LogButtonQuantum () {
	const { isLoggedIn } = useUser();

  return (
		<>
			{isLoggedIn ? <LogOutButton /> : <LogInButton />}
		</>
	)
}

export default LogButtonQuantum
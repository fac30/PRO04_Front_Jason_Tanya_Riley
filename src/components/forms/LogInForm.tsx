import { useUser } from "../../context/User";


function LogInForm() {
	const { setIsLoggedIn } = useUser();

	return (
		<p>WIP</p>
		/* onClick={() => setIsLoggedIn(true)} */
	)
}
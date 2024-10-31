import { useUser } from "../../context/User"
import { LoggedInText } from "../text/LoggedInText";
import { LogInForm } from '../forms/LogInForm';

function LogViewQuantum() {
	const { isLoggedIn } = useUser();

	console.log(`LogViewQuantum • isLoggedIn: ${isLoggedIn}`);

	return (
		isLoggedIn ? <LoggedInText /> : < LogInForm />
	)
}

export { LogViewQuantum }
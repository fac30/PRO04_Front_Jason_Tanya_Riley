import { useUser } from "../../context/User"
import { LoggedInText } from "../text/LoggedInText";
import { LogInForm } from '../forms/LogInForm';

function LogViewQuantum() {
	const isLoggedIn = useUser();

	return (
		isLoggedIn ? <LoggedInText /> : < LogInForm />
	)
}

export { LogViewQuantum }
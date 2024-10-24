import { useUser } from "../../context/User"
import { LoggedInText } from "../text/LoggedInText";
import { LogInForm } from '../forms/LogInForm';

function LogViewQuantum() {
	const { isLoggedIn } = useUser();

	console.log(`LogViewQuantum called`);
	console.log(`isLoggedIn: ${isLoggedIn}`);

	return (
		isLoggedIn ? <LoggedInText /> : < LogInForm />
	)
}

export { LogViewQuantum }
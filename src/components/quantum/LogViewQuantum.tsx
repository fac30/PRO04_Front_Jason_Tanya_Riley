import { useUser } from "../../context/User"
import { LoggedInText } from "../text/LoggedInText";
import { LoggedOutText } from "../text/LoggedOutText";

function LogViewQuantum() {
	const isLoggedIn = useUser();

	return (
		isLoggedIn ? <LoggedInText /> : < LoggedOutText />
	)
}

export { LogViewQuantum }
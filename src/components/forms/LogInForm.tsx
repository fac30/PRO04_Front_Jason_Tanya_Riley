import { useState, useContext } from "react";
import { StoreContext } from "../../context/Store";	
import { useUser } from "../../context/User";

function LogInForm() {
	const { setIsLoggedIn } = useUser();
	const { setView } = useContext(StoreContext);

	const [action, setAction] = useState<'login' | 'signup'>("login");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email || !password) {
			alert('Please fill in both email and password');
			return;
		}

		console.log(`Form submitted via ${action}`);
		const server = 'localhost:3000/auth/';
		const endpoint = ((action === 'login') ? 'log-in' : 'sign-up');
		const route = `${server}${endpoint}`;
		console.log(route);
		
		// try {
		// 	const response = await fetch(endpoint, {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify({ email, password }),
		// 	});

		// 	if (response.ok) {
		// 		const data = await response.json();
		// 		console.log(`${action} successful:`, data);
		// 		setIsLoggedIn(true);
		// 	} else {
		// 		console.error(`${action} failed:`, await response.text());
		// 	}
		// } catch (error) {
		// 	console.error(`Error during ${action}:`, error);
		// }
		
		alert(`${action} successful`);
		// setIsLoggedIn(true);
		setView('landing');
		return;
	}

	return (
		<form onSubmit={handleSubmit}
			className="border-2 border-primary-1"
		>
			<div id="input-container"
				className="flex flex-col"
			>
				<input
					type="email"
					placeholder="Email"
					autoComplete="log-in email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type="password"
					placeholder="Password"
					autoComplete="log-in password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<div id="button-container"
				className="flex flex-row justify-around"
			>
				<button type="submit" onClick={() => setAction('login')} className="button-tictac">
					Log In
				</button>

				<button type="submit" onClick={() => setAction('signup')} className="button-tictac">
					Sign Up
				</button>
			</div>
		</form>
	)
}

export { LogInForm };
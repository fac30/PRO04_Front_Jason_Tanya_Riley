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

		const server = 'https://crafts-crafts.onrender.com/auth/';
		const route = ((action === 'login') ? 'log-in' : 'sign-up');
		const endpoint = `${server}${route}`;

		const username = email.match(/^([^@]+)/)?.[1] || '';
		console.log(`Email: ${email}`);
		console.log(`Username: ${username}`);

		let body;
		if (action === 'login') {
			body = { email, password };
		} else {
			body = { username, email, password };
		}

		console.log(`Body: ${JSON.stringify(body)}`);

		console.log(`Calling ${endpoint}`);
		
		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify(body),
			});

			if (response.ok) {
				let data;
				const contentType = response.headers.get("content-type");
				
				if (contentType && contentType.indexOf("application/json") !== -1) {
					data = await response.json();
				} else {
					data = await response.text();
				}

				console.log(`${action} successful:`, data);
				alert(`${action} successful`);

				setIsLoggedIn(true);
				setView('landing');

			} else {
				const errorText = await response.text();
				console.error(`${action} failed:`, response.status, errorText);
				alert(`${action} failed: ${errorText}`);
			}
		} catch (error: any) {
			console.error(`Error during ${action}:`, error);
			alert(`Error during ${action}: ${error.message}`);
		}
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

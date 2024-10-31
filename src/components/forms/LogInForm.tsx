import { useState, useContext } from "react";
import { useEnv } from "../../context/Environment";
import { StoreContext } from "../../context/Store";
import { useUser } from "../../context/User";

function LogInForm() {
	const { serverURL } = useEnv();
	const { setView } = useContext(StoreContext);
	const { setIsLoggedIn, setUserName, setUserEmail } = useUser();
	
	const [action, setAction] = useState<'login' | 'signup'>("login");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		console.groupCollapsed(`Login Form Submit Handler`);
		e.preventDefault();

		if (!email || !password) {
			alert('Please fill in both email and password');
			return;
		}

		console.log(`Form submitted via ${action}`);

		const server = `${serverURL}/auth/`;
		let route/*  = ((action === 'login') ? 'log-in' : 'sign-up') */;

		const username = email.match(/^([^@]+)/)?.[1] || '';
		console.log(`Deriving: ${email} ==> ${username}`);

		let body;
		switch (action) {
			case 'login':
				route = 'log-in';
				body = { email, password };
				break;
			case 'signup':
				route = 'sign-up';
				body = { username, email, password };
				break;
		}
		const endpoint = `${server}${route}`;

		console.groupCollapsed(`Request Details`);
		console.log(`Action: ${action}`);
		console.log(`Body: ${JSON.stringify(body)}`);
		console.log(`Endpoint: ${endpoint}`);
		console.groupEnd();

		console.group(`Calling ${endpoint}`);
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

				switch (action) {
					case 'login':
						console.log(`${action} successful:`, data);
						alert(`${action} successful`);
						console.groupCollapsed(`Server Response`);
						console.log(response);
						console.groupEnd();
						
						setIsLoggedIn(true);
						setUserName(username);
						setUserEmail(email);
						setView('landing');
						break;
					case 'signup':
						console.log(`${action} successful:`, data);
						break;
				}
			} else {
				const errorText = await response.text();
				console.error(`${action} failed:`, response.status, errorText);
				alert(`${action} failed: ${errorText}`);
			}
		} catch (error: any) {
			console.error(`Error during ${action}:`, error);
			alert(`Error during ${action}: ${error.message}`);
		}
		console.groupEnd(); // endpoint
		console.groupEnd(); // handleSubmit
	}

	return (
		<div className="prose">
			<h2>Log In</h2>

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
		</div>
	);
}

export { LogInForm };

import { useContext } from 'react'
import { useEnv } from '../../context/Environment';
import { StoreContext } from '../../context/Store';
import { useUser } from '../../context/User'
import { LogOut } from "lucide-react"

function LogOutButton() {
	const { serverURL } = useEnv();
	const { setView } = useContext(StoreContext);
	const { isLoggedIn, setIsLoggedIn, userName, setUserName, userEmail, setUserEmail } = useUser();

	async function handleLogOut(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();



		switch (isLoggedIn) {
			case true:
				const body = { userEmail, userName };
				try {
					const response = await fetch(`${serverURL}/auth/log-out`, {
						method: 'POST',
						headers: { 
							'Content-Type': 'application/json'
						},
						credentials: 'include',
						body: JSON.stringify(body)
					});

					if (response.ok) {
						let data;
						const contentType = response.headers.get("content-type");
						
						if (contentType && contentType.indexOf("application/json") !== -1) {
							data = await response.json();
						} else {
							data = await response.text();
						}
						
						setIsLoggedIn(false);
						setUserEmail('');
						setUserName('');

						alert('Logged Out');
						setView('landing');
					} else {
						const errorText = await response.text();
						console.error(`Logout failed:`, response.status, errorText);
						alert(`$Logout failed: ${errorText}`);
					}
				} catch (error) {
					console.error('Error logging out:', error);
					alert(`Error logging out`);
				}
				break;
			default:
				alert(
					'Not Logged In. Please refresh your browser.'
				);
				break;
		}
	}

	return (
		<button
		className='mr-2 text-primary-A hover:text-primary-0 transition-colors'
		onClick={handleLogOut}
		>
			<LogOut className="h-6 w-6" />
		</button>
	)
}

export default LogOutButton
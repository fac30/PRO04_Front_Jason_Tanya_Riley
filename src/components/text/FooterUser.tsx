import { useUser } from '../../context/User';

export function FooterUser() {
	const { userName } = useUser();

	return (
		<p 
			className=' text-primary-0 text-left'
		>
			Welcome, {userName}
		</p>
	)
}
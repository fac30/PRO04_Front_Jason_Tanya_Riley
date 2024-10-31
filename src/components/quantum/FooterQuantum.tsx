import { useUser } from '../../context/User';
import { FooterGuest } from '../text/FooterGuest';
import { FooterUser } from '../text/FooterUser';

export function FooterQuantum() {
	const { isLoggedIn } = useUser();
	return (
		<>
			{isLoggedIn ? <FooterUser /> : <FooterGuest />}
		</>
	)
}
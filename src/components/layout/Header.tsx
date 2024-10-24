import { useContext } from 'react';
import  { StoreContext } from '../../context/Store';
import UserButtonGroup from '../groups/UserButtonGroup'

function Header() {
	const { setView } = useContext(StoreContext);

	const handleHeaderClick = (e: React.MouseEvent) => {
		// if (e.target === e.currentTarget) {
		// 	setView('landing');
		// }

		console.log(`Site Header clicked`);
		setView('landing');
	};

	return (
		<header className='bg-primary-2 w-full'>
			<div id="header-content"
				className='justify-between container mx-auto px-4 py-4 flex items-center'
			>
				<div id="header1" className="prose"
					onClick={handleHeaderClick}
				>
					<h1 className='header1'>
						Craft & Graft
					</h1>
				</div>

				<UserButtonGroup />
			</div>
		</header>
	)
}

export default Header

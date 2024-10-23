import { useContext } from 'react';
import  { StoreContext } from '../../context/Store';
import UserButtonGroup from '../groups/UserButtonGroup'

function Header() {
	const { setView } = useContext(StoreContext);

	const handleHeaderClick = (e: React.MouseEvent) => {
		// Only set view to landing if clicking directly on the header container
		if (e.target === e.currentTarget) {
			setView('landing');
		}
	};

	return (
		<header className='bg-primary-2 w-full'>
			<div 
				className='justify-between container mx-auto px-4 py-4 flex items-center' 
				onClick={handleHeaderClick}
			>
				<div id="header1" className="prose">
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

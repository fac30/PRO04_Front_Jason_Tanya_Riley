import { useContext } from 'react'
import { StoreContext } from '../../context/Store'
import { useUser } from '../../context/User'
import UserButtonBar from '../groups/UserButtonBar'

function Header() {
  return (
    <header className='bg-primary-2 w-full'>
      <div className='justify-between container mx-auto px-4 py-4 flex items-center'>
				<div className="prose">
					<h1 className='text-primary-A text-left text-2xl font-bold text-outline shadow-primary-3'>
						Craft & Graft
					</h1>
				</div>

				<UserButtonBar />
      </div>
    </header>
  )
}

export default Header

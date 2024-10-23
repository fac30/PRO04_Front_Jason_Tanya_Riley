import UserButtonGroup from '../groups/UserButtonGroup'

function Header() {
  return (
    <header className='bg-primary-2 w-full'>
      <div className='justify-between container mx-auto px-4 py-4 flex items-center'>
				<div id="header1" className="prose">
					<h1 className='text-primary-A text-left text-2xl font-bold text-outline shadow-primary-3'>
						Craft & Graft
					</h1>
				</div>
				<UserButtonGroup />
      </div>
    </header>
  )
}

export default Header

import React from 'react'
import { useUser } from '../../context/User'

function Footer() {
	const { isLoggedIn, setIsLoggedIn } = useUser();

  return (
    <footer className='bg-primary-2 w-full'>
			<div className="flex container justify-between">
				<div>
					{isLoggedIn ? (
						<button className="button-bonbon" onClick={
							() => setIsLoggedIn(false)}
						>Logout</button>
					) : (
						<button className="button-bonbon" onClick={
							() => setIsLoggedIn(true)}
						>Login</button>
					)}
				</div>

				<div className='container mx-auto px-4 py-4'>
					<p className='text-primary-0 text-left'>
						Don't steal our shit
					</p>
				</div>
			</div>
    </footer>
  )
}

export default Footer

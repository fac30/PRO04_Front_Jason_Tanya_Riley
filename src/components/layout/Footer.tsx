import React from 'react'
import { useUser } from '../../context/User'

function Footer() {
	return (
    <footer className='bg-primary-2 w-full'>
			<div id="footCont" className="flex container justify-between">
				<div id="footerContText" className='container mx-auto px-4 py-4'>
					<p className='text-primary-0 text-left'>
						Don't steal our shit
					</p>
				</div>
			</div>
    </footer>
  )
}

export default Footer

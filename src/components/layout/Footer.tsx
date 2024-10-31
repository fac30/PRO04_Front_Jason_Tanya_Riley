import { FooterQuantum } from '../quantum/FooterQuantum';

function Footer() {
	return (
    <footer className='bg-primary-2 w-full'>
			<div id="footCont" className="flex container justify-between">
				<div id="footerContText" className='container mx-auto px-4 py-4'>
					<FooterQuantum />
				</div>
			</div>
    </footer>
  )
}

export default Footer

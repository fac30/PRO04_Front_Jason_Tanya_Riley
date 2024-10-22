import React from 'react';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { StoreProvider } from './context/Store';
import { UserProvider } from './context/User';

function App() {
  return (
    <StoreProvider>
			<UserProvider>
				<div className='flex flex-col h-screen'>
					<Header />

					<div className='flex-1 overflow-auto'>
						<Content />
					</div>

					<Footer />
				</div>
			</UserProvider>
    </StoreProvider>
  )
}

export default App
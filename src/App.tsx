import React from 'react';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { StoreProvider } from './context/Store';

function App() {
  return (
    <StoreProvider>
      <Header />
			<hr />
			<Content />
			<hr />
			<Footer />
    </StoreProvider>
  )
}

export default App
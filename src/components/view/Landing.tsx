import React, { useContext } from 'react';
import { StoreContext } from '../../context/Store';

export function LandingView() {
  const { setView } = useContext(StoreContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-xl mb-8 text-center">
				Your one-stop shop for all your leisure and hobby needs
			</p>
      <button
        onClick={() => setView('search')}
        className="px-6 py-2 rounded-full text-lg transition-colors bg-primary-0 text-primary-5 hover:opacity-90"
      >
        Start Shopping
      </button>
    </div>
  );
}

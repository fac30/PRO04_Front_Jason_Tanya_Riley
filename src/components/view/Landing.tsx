import React, { useContext } from 'react';
import { StoreContext } from '../../context/Store';

export function LandingView() {
  const { setView } = useContext(StoreContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-xl mb-8 text-center">Your one-stop shop for all your leisure and hobby needs</p>
      <button
        onClick={() => setView('search')}
        className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-600 transition-colors"
      >
        Start Shopping
      </button>
    </div>
  );
}

import React, { useContext } from 'react';
import { StoreContext } from '../../context/Store';

export function LandingView() {
  const { setView } = useContext(StoreContext);

  return (
    <section className="flex flex-col items-center justify-center min-h-full">
      <p className="text-xl mb-8 text-center">
				Your one-stop shop for all your leisure and hobby needs
			</p>
      <button
        onClick={() => setView('search')}
        className="button-bonbon"
      >
        Start Shopping
      </button>
    </section>
  );
}

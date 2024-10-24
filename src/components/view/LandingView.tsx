import React, { useContext } from 'react';
import { StoreContext } from '../../context/Store';
import { useUser } from '../../context/User'

export function LandingView() {
  const { setView } = useContext(StoreContext);
	const { isLoggedIn, setIsLoggedIn } = useUser();

  return (
    <section className="flex flex-col items-center justify-center min-h-full">
      <p className="text-xl mb-8 text-center">
				{isLoggedIn ? "Welcome back to " : ""} Craft & Graft {isLoggedIn ? ", " : "is"} the one-stop shop for all your leisure and hobby needs
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

import { LogViewQuantum } from '../quantum/LogViewQuantum';
import { useContext } from 'react';
import { useUser } from '../../context/User';

function LogView() {
	const { isLoggedIn } = useUser();

	console.log(`LogView • isLoggedIn: ${isLoggedIn}`);

  return (
    <section>
			<LogViewQuantum />
    </section>
  );
}

export { LogView };
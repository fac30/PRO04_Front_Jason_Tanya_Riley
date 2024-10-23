import { useContext } from 'react';
import { StoreContext } from '../../context/Store';
import { useUser } from '../../context/User'
import { LogViewQuantum } from '../quantum/LogViewQuantum';

function LogView() {
  const { isLoggedIn } = useUser();
  const { view } = useContext(StoreContext);

  return (
    <section>
			<LogViewQuantum />
    </section>
  );
}

export { LogView };
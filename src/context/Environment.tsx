import React, { createContext, useEffect, useState, useContext, ReactNode } from 'react';

interface EnvironmentContextType {
  isLocal: boolean;
  setIsLocal: (isLocal: boolean) => void;
	serverURL: string;
	setServerURL: (serverURL: string) => void;
}

const EnvironmentContext = createContext<EnvironmentContextType | undefined>(
	undefined
);

export const EnvironmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLocal, setIsLocal] = useState(false);
	const [serverURL, setServerURL] = useState('Not Set');

	useEffect(() => {
    const runAt = window.location.hostname;
    const newIsLocal = runAt === 'localhost';
    setIsLocal(newIsLocal);
    
    const useURL = newIsLocal ? 'http://localhost:3000' : 'https://crafts-crafts.onrender.com';
    setServerURL(useURL);
  }, []);

	useEffect(() => {
		console.log('serverURL updated to:', serverURL);
	}, [serverURL]);

	// const handleSetServerURL = () => {
	// 	console.groupCollapsed(`handleSetServerURL: Running`);
	// 	console.log(`Server URL at Start: ${serverURL}`);

	// 	const runAt = window.location.hostname;
	// 	console.log(`Running at: ${runAt}`);

	// 	const useURL = (runAt === 'localhost') ? 'http://localhost:3000' : 'https://crafts-crafts.onrender.com';

	// 	console.log(`URL to Use: ${useURL}`);

	// 	setServerURL(useURL);

	// 	console.log(`Server URL at End: ${serverURL}`);
	// 	console.groupEnd();
	// };

  return (
    <EnvironmentContext.Provider value={{
			isLocal,
			setIsLocal,
			serverURL,
			setServerURL: (newURL: string) => setServerURL(newURL)
		}}>
      {children}
    </EnvironmentContext.Provider>
  );
};

export const useEnv = () => {
  const context = useContext(EnvironmentContext);

  if (context === undefined) {
    throw new Error('useEnv must be used within an EnvironmentProvider');
  }

  return context;
};
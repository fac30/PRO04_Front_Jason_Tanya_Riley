import React, { createContext, useEffect, useState, useContext, ReactNode } from 'react';

/**
 * ${1:Description placeholder}
 *
 * @interface EnvironmentContextType
 * @typedef {EnvironmentContextType}
 */
interface EnvironmentContextType {
  /**
 * ${1:Description placeholder}
 *
 * @type {boolean}
 */
isLocal: boolean;
  /**
 * ${1:Description placeholder}
 *
 * @type {(isLocal: boolean) => void}
 */
setIsLocal: (isLocal: boolean) => void;
	/**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
serverURL: string;
	/**
 * ${1:Description placeholder}
 *
 * @type {(serverURL: string) => void}
 */
setServerURL: (serverURL: string) => void;
}

/**
 * ${1:Description placeholder}
 *
 * @type {${2:*}}
 */
const EnvironmentContext = createContext<EnvironmentContextType>({
  isLocal: false,
  setIsLocal: () => {},
  serverURL: '',
  setServerURL: () => {},
});

/**
 * ${1:Description placeholder}
 *
 * @param {{ children: any; }} param0
 * @param {${2:*}} param0.children
 * @returns {${3:*}\}
 */
export const EnvironmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLocal, setIsLocal] = useState(false);
	const [serverURL, setServerURL] = useState('');

	useEffect(() => {
    const runAt = window.location.hostname;
    const newIsLocal = runAt === 'localhost';
    setIsLocal(newIsLocal);
    
    const useURL = (newIsLocal ? 'http://localhost:3000' : 'https://crafts-crafts.onrender.com');
    setServerURL(useURL);
  }, []);

	useEffect(() => {
		console.log('serverURL updated to:', serverURL);
	}, [serverURL]);

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

/**
 * ${1:Description placeholder}
 *
 * @returns {${2:*}}
 */
export const useEnv = () => {
  const context = useContext(EnvironmentContext);

  if (context === undefined) {
    throw new Error('useEnv must be used within an EnvironmentProvider');
  }

  return context;
};
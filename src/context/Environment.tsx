import React, { createContext, useState, useContext, ReactNode } from 'react';

interface EnvironmentContextType {
  isLocal: boolean;
  setIsLocal: (isLocal: boolean) => void;
}

const EnvironmentContext = createContext<EnvironmentContextType | undefined>(
	undefined
);

export const EnvironmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLocal, setIsLocal] = useState(false);

  return (
    <EnvironmentContext.Provider value={
			{ isLocal, setIsLocal }
		}>
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
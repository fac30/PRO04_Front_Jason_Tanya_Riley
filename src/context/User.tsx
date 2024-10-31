import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
	userName: string;
	setUserName: (userName: string) => void;
	userEmail: string;
	setUserEmail: (userEmail: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, userName, setUserName, userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
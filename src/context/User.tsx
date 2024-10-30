import React, { createContext, useState, useContext, ReactNode } from 'react';

/**
 * ${1:Description placeholder}
 *
 * @interface UserContextType
 * @typedef {UserContextType}
 */
interface UserContextType {
  /**
 * ${1:Description placeholder}
 *
 * @type {boolean}
 */
isLoggedIn: boolean;
  /**
 * ${1:Description placeholder}
 *
 * @type {(isLoggedIn: boolean) => void}
 */
setIsLoggedIn: (isLoggedIn: boolean) => void;
}

/**
 * ${1:Description placeholder}
 *
 * @type {${2:*}}
 */
const UserContext = createContext<UserContextType | undefined>(undefined);

/**
 * ${1:Description placeholder}
 *
 * @param {{ children: any; }} param0
 * @param {${2:*}} param0.children
 * @returns {${3:*}\}
 */
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * ${1:Description placeholder}
 *
 * @returns {${2:*}}
 */
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
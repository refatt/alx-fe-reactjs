import React, { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = {
    name: 'John Doe',
    age: 30,
    bio: 'A passionate software developer and football enthusiast.',
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

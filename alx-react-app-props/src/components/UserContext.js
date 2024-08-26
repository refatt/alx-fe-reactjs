import React, { createContext } from 'react';

// Named export for UserContext
export const UserContext = createContext();

// Named export for UserProvider
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

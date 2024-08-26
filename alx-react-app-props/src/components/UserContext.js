import React, { createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
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

// Use export default for UserContext or UserProvider
export { UserContext };
export default UserProvider;

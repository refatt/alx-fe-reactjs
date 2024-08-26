import React from 'react';
import { UserContext } from './UserContext'; // Named import
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const user = {
    name: 'John Doe',
    age: 30,
    bio: 'A passionate software developer and football enthusiast.',
  };

  return (
    <UserContext.Provider value={user}>
      <Header />
      <MainContent>
        <UserProfile />
      </MainContent>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;

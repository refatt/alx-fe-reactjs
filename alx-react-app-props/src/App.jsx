import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <UserProvider>
      <Header />
      <MainContent>
        <UserProfile />
      </MainContent>
      <Footer />
    </UserProvider>
  );
}

export default App;

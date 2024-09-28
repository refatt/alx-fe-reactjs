import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setLoading(true);   // Start loading state
    setError('');       // Clear any previous errors
    setUserData(null);  // Clear previous user data

    try {
      const data = await fetchUserData(username);
      setUserData(data); // Set the user data received from the API
    } catch (err) {
      setError('Looks like we can’t find the user.');  // Set error message
    } finally {
      setLoading(false);  // Stop loading state
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>

      {/* Pass props to Search component */}
      <Search 
        onSearch={handleSearch} 
        loading={loading} 
        userData={userData} 
        error={error} 
      />
    </div>
  );
}

export default App;

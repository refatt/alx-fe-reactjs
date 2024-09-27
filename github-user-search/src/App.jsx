import React, { useState } from 'react';
import Search from './components/Search';  // Import the Search component
import { fetchUserData } from './services/githubService';  // API service

function App() {
  const [userData, setUserData] = useState(null);  // Holds the user data from GitHub
  const [loading, setLoading] = useState(false);  // Loading state
  const [error, setError] = useState('');  // Error state

  const handleSearch = async (username) => {
    setLoading(true);   // Start loading
    setError('');       // Reset any previous error messages
    setUserData(null);  // Clear previous user data

    try {
      const data = await fetchUserData(username);  // Fetch data from GitHub API
      setUserData(data);  // Set user data if successful
    } catch (err) {
      setError('Looks like we can’t find the user.');  // Set error message on failure
    } finally {
      setLoading(false);  // Stop loading once request is done
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      {/* Search input component */}
      <Search onSearch={handleSearch} />

      {/* Display loading, error, or user data */}
      {loading && <p>Loading...</p>}  {/* Show loading message */}
      {error && <p>{error}</p>}       {/* Show error message */}
      {userData && (                  {/* Show user data if available */}
        <div>
          <h2>{userData.name || 'No Name Available'}</h2>
          <img src={userData.avatar_url} alt="User Avatar" width="100" />
          <p>Username: {userData.login}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Search from './components/Search';  // Import Search component
import { fetchUserData } from './services/githubService';  // Import the API service

function App() {
  const [userData, setUserData] = useState(null);  // Holds user data from GitHub
  const [loading, setLoading] = useState(false);   // Loading state
  const [error, setError] = useState('');          // Error state

  const handleSearch = async (username) => {
    setLoading(true);  // Set loading state to true when searching
    setError('');      // Reset any previous error messages
    setUserData(null); // Clear previous user data

    try {
      const data = await fetchUserData(username);  // Fetch data from GitHub API
      setUserData(data);  // Set user data on success
    } catch (err) {
      setError('Looks like we can’t find the user.');  // Set error message on failure
    } finally {
      setLoading(false);  // Stop loading once request completes
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      
      {/* Search component */}
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

import React, { useState } from 'react';
import Search from './components/Search';   // Import Search component
import { fetchUserData } from './services/githubService';   // Import the API call

function App() {
  const [userData, setUserData] = useState(null);  // Holds user data from GitHub
  const [loading, setLoading] = useState(false);   // Loading state
  const [error, setError] = useState('');          // Error state

  const handleSearch = async (username) => {
    setLoading(true);    // Set loading state to true
    setError('');        // Clear any previous errors
    setUserData(null);   // Clear previous user data

    try {
      const data = await fetchUserData(username);  // Fetch user data from GitHub API
      setUserData(data);   // Set user data if successful
    } catch (err) {
      setError('Looks like we can’t find the user.');   // Set error message on failure
    } finally {
      setLoading(false);   // Stop loading after request is completed
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>

      {/* Render Search component */}
      <Search onSearch={handleSearch} />

      {/* Render loading, error, or user data */}
      {loading && <p>Loading...</p>}  {/* Show "Loading..." message */}
      {error && <p>{error}</p>}       {/* Show error message */}
      {userData && (                  {/* Display user data if available */}
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

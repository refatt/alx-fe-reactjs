import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state

    try {
      const data = await fetchUserData(username);
      setUserData(data); // Assume data is a single user object for this example
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="search-input"
          required
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div className="user-result">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} className="avatar" />
          <h2>{userData.login}</h2>
          <a href={`https://github.com/${userData.login}`} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}

      {/* Example of displaying multiple users (assuming userData could be an array) */}
      {Array.isArray(userData) && (
        <div className="user-list">
          {userData.map((user) => (
            <div key={user.id} className="user-item">
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="avatar" />
              <h2>{user.login}</h2>
              <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

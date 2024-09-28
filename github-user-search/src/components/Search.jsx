import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state

    try {
      const data = await searchUsers(query);
      setUserData(data); // Update state with the list of users
    } catch (err) {
      setError('Looks like we can’t find any users matching that criteria.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for GitHub users..."
          className="search-input"
          required
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
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
    </div>
  );
};

export default Search;

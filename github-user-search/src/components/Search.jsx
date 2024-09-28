import React, { useState } from 'react';

const Search = ({ onSearch, loading, userData, error }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() || location.trim() || minRepos.trim()) {
      onSearch({ username, location, minRepos });
      setUsername('');
      setLocation('');
      setMinRepos('');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded p-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Search</button>
      </form>

      {/* Display loading, error, or user data */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {userData && userData.length > 0 && (
        <div className="mt-4">
          {userData.map((user) => (
            <div key={user.id} className="border p-4 rounded mb-2">
              <img src={user.avatar_url} alt="User Avatar" width="100" />
              <p>Username: {user.login}</p>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Visit Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

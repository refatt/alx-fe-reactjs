import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null); // To store API response

  // Placeholder for handling search submission
  const handleSearch = (term) => {
    setSearchTerm(term);
    // Here, you'll later add the logic to fetch data from the GitHub API
    console.log(`Searching for: ${term}`);
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      {/* Search input component */}
      <SearchInput onSearch={handleSearch} />
      
      {/* Search result component */}
      <SearchResults userData={userData} />
    </div>
  );
}

export default App;

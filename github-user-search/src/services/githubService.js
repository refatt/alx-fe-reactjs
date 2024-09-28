import axios from 'axios';

// Function to fetch user data by username
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Function to search for users with advanced criteria
export const searchUsers = async (queryParams) => {
  const { username, location, minRepos } = queryParams;
  
  // Construct the query string
  let query = username ? `q=${username}` : 'q=';
  
  // Add location if provided
  if (location) {
    query += `+location:${location}`;
  }
  
  // Add minimum repositories filter if provided
  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }

  const response = await axios.get(`https://api.github.com/search/users?${query}`);
  return response.data.items; // Return the array of user objects
};

import axios from 'axios';

// Function to fetch user data by username
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Function to search for users with advanced criteria
export const searchUsers = async (query) => {
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data.items; // Return the array of user objects
};

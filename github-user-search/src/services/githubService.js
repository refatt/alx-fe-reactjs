import axios from 'axios';

// Function to fetch GitHub user data
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;  // Return the response data (user information)
};

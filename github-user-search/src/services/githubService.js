import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

export const fetchUserData = async ({ username, location, minRepos }) => {
  const query = [];
  
  if (username) {
    query.push(`${username}`);
  }
  if (location) {
    query.push(`location:${location}`);
  }
  if (minRepos) {
    query.push(`repos:>${minRepos}`);
  }

  const response = await axios.get(`${GITHUB_API_URL}?q=${query.join('+')}`);
  return response.data.items; // Returns the list of users
};

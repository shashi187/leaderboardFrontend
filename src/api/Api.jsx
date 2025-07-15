import axios from 'axios';

const api = axios.create({
  baseURL: 'https://leaderboardbackend-vhp0.onrender.com/api'
});

export default api;

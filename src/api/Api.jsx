import axios from 'axios';

const api = axios.create({
  baseURL: 'https://leaderboardbackend-production-a5b8.up.railway.app/api'
});

export default api;

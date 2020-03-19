import 'dotenv/config';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.APP_URL,
  headers: {
    Authorization: process.env.OAUTH_CONSUMER_KEY,
  },
});

export default api;

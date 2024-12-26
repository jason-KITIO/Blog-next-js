// config.js
const apiUrl = process.env.NODE_ENV === 'production'
  ? process.env.API_URL_PRODUCTION
  : process.env.API_URL_LOCAL;

export default apiUrl;

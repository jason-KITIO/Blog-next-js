// config.js
const apiUrl = process.env.NODE_ENV === 'production'
  ? process.env.API_URL_PRODUCTION // Assurez-vous que cette variable est définie dans Vercel
  : process.env.API_URL_LOCAL; // Assurez-vous que cette variable est définie localement

export default apiUrl;

import axios from 'axios';

const BaseAPI = axios.create({
  baseURL: 'https://6082e3545dbd2c001757abf5.mockapi.io/',
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "1800",
    "Access-Control-Allow-Headers": "Content-Type, Origin, Accept,Authorization,Content-Length, X-Requested-With"
  },
});

export default BaseAPI;

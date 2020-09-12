import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 7074bb17a931cd0f11cef761bfa5e12d8a04c9108bb2878f46410fe432298586'
  }
});
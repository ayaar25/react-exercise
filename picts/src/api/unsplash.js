import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9b9b77e75687e365eee12675267eb838662bfd6b3a9b273710ea895e99897bcf'
  }
});
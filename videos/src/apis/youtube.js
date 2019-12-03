import axios from 'axios';

const KEY = 'AIzaSyA2pJaSELpZVJqm_fcj4jD86_2QizLfrHw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});
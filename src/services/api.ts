import axios from 'axios';

const api = axios.create({
  baseURL:'https://backend-wiser.herokuapp.com/api/'
});

export default api;

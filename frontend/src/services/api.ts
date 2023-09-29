import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
)
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
)

export default api

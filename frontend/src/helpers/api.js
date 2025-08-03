// src/helpers/api.js
import axios from 'axios';

// Tạo một instance chung cho toàn bộ API
const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { 'Content-Type': 'application/json' }
});

// Export các phương thức cơ bản: GET, POST, PUT, DELETE
export const api = {
  get: API.get,
  post: API.post,
  put: API.put,
  delete: API.delete
};

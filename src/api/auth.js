import axios from 'axios';

const fakeUser = {
  id: 1,
  username: 'demo_user',
  email: 'demo@example.com',
  password: 'password',
};

export const login = (username, password) => {
  if (username === fakeUser.username && password === fakeUser.password) {
    return Promise.resolve({ token: 'your-jwt-token' });
  } else {
    return Promise.reject(new Error('Invalid credentials'));
  }
};

export const getUserData = () => {
  return Promise.resolve(fakeUser);
};

console.log('get tokken ')

const api = axios.create({
  baseURL: process.env.REACT_APP_BE_HOST, // Replace with your API endpoint
  timeout: 10000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
  
});

export default api;

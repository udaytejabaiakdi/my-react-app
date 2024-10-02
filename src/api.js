import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const loginUser = (email, password) => {
  return axios.post(`${API_URL}/users/login`, { email, password });
};

export const registerUser = (name, email, password, contact) => {
  return axios.post(`${API_URL}/users/register`, { name, email, password, contact });
};

export const addBook = (title, author, genre, available) => {
  return axios.post(`${API_URL}/books/add`, { title, author, genre, available });
};

export const borrowBook = (userId, bookId, email) => {
  return axios.post(`${API_URL}/borrows/borrow`, { user_id: userId, book_id: bookId, email });
};

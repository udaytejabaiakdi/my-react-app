import React, { useState } from 'react';
import { borrowBook } from '../api';

const BorrowBookForm = () => {
  const [userId, setUserId] = useState('');
  const [bookId, setBookId] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await borrowBook(userId, bookId, email);
      setMessage('Book borrowed successfully!');
    } catch (error) {
      setMessage('An error occurred while borrowing the book!');
    }
  };

  return (
    <div>
      <h2>Borrow Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
        </div>
        <div>
          <label>Book ID:</label>
          <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Borrow Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BorrowBookForm;

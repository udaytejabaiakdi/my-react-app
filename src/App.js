import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AddBookForm from './components/AddBookForm';
import BorrowBookForm from './components/BorrowBookForm';

function App() {
  return (
    <div className="App">
      <h1>Library Management</h1>
      <LoginForm />
      <RegisterForm />
      <AddBookForm />
      <BorrowBookForm />
    </div>
  );
}

export default App;

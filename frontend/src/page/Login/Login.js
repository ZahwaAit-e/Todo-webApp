import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios

import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Make an HTTP POST request to your backend login endpoint
      const response = await axios.post('http://localhost:3000/login', {
        email: username, // Assuming the email is used for login in your backend
        password,
      });

      // Handle the response from the backend
      console.log('Login successful', response.data);

      // You may want to redirect the user to another page upon successful login
    } catch (error) {
      // Handle login error
      console.error('Login failed', error.response.data.message);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
      </div>
      <button className="button" onClick={handleLogin}>
        Login
      </button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;

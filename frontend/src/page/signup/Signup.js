// Signup.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css'; // Import the CSS file
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Import eye icons

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = () => {
    // Replace this with your actual signup logic
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Perform signup logic (e.g., send data to a server)
      console.log('Signup successful');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="password-input">
        <label>Password:</label>
        <div className="password-input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className={showPassword ? 'activ' : ''} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>
      </div>
      <div className="confirm-password-input">
        <label>Confirm Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
          
      </div>
      <button className="button" onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;


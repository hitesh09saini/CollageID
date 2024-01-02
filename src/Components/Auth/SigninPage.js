// Signin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const handleSignin = () => {
    // Implement your sign-in logic here
    // You can use state values (email, password, name, username) for authentication or API calls
    console.log('Signin clicked', { email, password, name, username });
  };

  return (
    <div className=" absolute max-w-md mx-auto mt-8 p-6 bg-white border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button
          className="text-white py-2 px-4 rounded  hover:bg-blue-700"
          type="button"
          onClick={handleSignin}
        >
          Sign In
        </button>
      </form>
      <p className="mt-4">
        {/* Don't have an account? <Link to="/signup">Sign up</Link> */}
      </p>
    </div>
  );
};

export default Signin;

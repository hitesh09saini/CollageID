// Signin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
    <div className=" absolute sm:w-[400px] mx-auto mt-8 p-6 bg-white border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email & UserName
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
        <button
          className="bg-blue-600 text-white hover:bg-blue-500 py-2 px-4 rounded bg-blue-600"
          type="button"
          onClick={handleSignin}
        >
          LogIn
        </button>

        <Link to="/signin">
          <p className='text-blue-600 hover:text-blue-400 active:text-red-600'>Create your Account</p>
        </Link>

      </form>

    </div>
  );
};

export default Login;

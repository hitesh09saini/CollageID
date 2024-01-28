// Signin.js
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handlelogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/v1/user/login', {
        user,
    }, { withCredentials: true })
        .then((res) => {
            console.log('success: ' + res.data.success);

            setUser({
                email: '',
                password: '',
            });
        })
        .catch((error) => {
            console.error('Signin error:', error);
        });
  };

  return (
    <div className=" absolute sm:w-[400px] mx-auto mt-8 p-6 bg-white border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login Account</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email & UserName
          </label>
          <input
            required
            className="border rounded w-full py-2 px-3"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            required
            className="border rounded w-full py-2 px-3"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Link to='/forgot-password'>
            <p className='text-blue-600 hover:text-blue-500 active:text-red-600'>forgot password</p>
          </Link>
        </div>

        <button
          className="bg-blue-600 text-white hover:bg-blue-500 py-2 px-4 rounded bg-blue-600"
          type="button"
          onClick={handlelogin}
        >
          Login
        </button>

        <Link to="/signin">
          <p className='text-blue-600 hover:text-blue-400 active:text-red-600'>Create your Account</p>
        </Link>

      </form>

    </div>
  );
};

export default Login;

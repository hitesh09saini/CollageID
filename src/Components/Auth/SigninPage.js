// Signin.js
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    username: '',
  })


  const handleSignin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/v1/user/register', {
        user,
    }, { withCredentials: true })
        .then((res) => {
            console.log('success: ' + res.data.success);

            setUser({
                email: '',
                password: '',
                name: '',
                username: '',
            });
        })
        .catch((error) => {
            console.error('Signin error:', error);
        });
};

  const handleUsername = (e) => {
    setUser({ ...user, username: e.target.value })
    try {


    } catch (error) {
      console.error('username Error:' + error);
    }
  }

  
  return (
    <div className=" absolute sm:w-[400px] mx-auto mt-8 p-6 bg-white border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Your Account</h2>
      <form onSubmit={handleSignin}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
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
            Password:
          </label>
          <input
            required
            className="border rounded w-full py-2 px-3"
            type="password"
            value={user.password}
            minLength="8"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            required
            className="border rounded w-full py-2 px-3"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username:
          </label>
          <input
            required
            className="border rounded w-full py-2 px-3"
            type="text"
            value={user.username}
            onChange={(e) => handleUsername(e)}
          />
        </div>
        <input
          className="bg-blue-600 text-white hover:bg-blue-500 py-2 px-4 rounded bg-blue-600"
          type="Submit"
          value={'Submit'}
        />

        <Link to="/login">
          <p className='text-blue-600 hover:text-blue-400 active:text-red-600'> if you have account ? login</p>
        </Link>
      </form>

    </div>
  );
};

export default Signin;

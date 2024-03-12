import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiSignin } from '../../ContextApi/userApis.js'

const Signin = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    username: '',
  });

  const nevigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const result = await apiSignin(user);
      console.log(result.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="absolute sm:w-[400px] mx-auto mt-8 p-6 bg-white border rounded shadow-md">
      <div className='flex justify-end '>
        <span onClick={() => { nevigate('/search') }} className='hover:bg-gray-300'>
          <i className="fa-solid  fa-xmark fa-xl"></i>
        </span>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">Create Your Account</h2>

      <form onSubmit={handleSignin}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            required
            className="border rounded w-full py-2 px-3"
            type="email"
            name='email'
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            required
            className="border rounded w-full py-2 px-3"
            type="current-password"
            name='password'
            value={user.password}
            minLength="8"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            required
            className="border rounded w-full py-2 px-3"
            type="text"
            name='name'
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            required
            className="border rounded w-full py-2 px-3"
            type="text"
            name='username'
            value={user.username}
            onChange={handleChange}
          />
        </div>

        <input
          className="bg-blue-600 text-white hover:bg-blue-500 py-2 px-4 rounded bg-blue-600"
          type="submit"
          value={'Submit'}
        />

        <Link to="/">
          <p className='text-blue-600 hover:text-blue-400 active:text-red-600'> if you have account ? login</p>
        </Link>
      </form>
    </div>
  );
};

export default Signin;

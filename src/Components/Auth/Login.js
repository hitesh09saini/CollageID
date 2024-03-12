import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiLogin } from '../../ContextApi/userApis.js'
import { useAppContext } from '../../ContextApi/AppContext.jsx';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const { setUser } = useAppContext();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await apiLogin(form);
      console.log(result.data.user);
      if (result.data.success) {
        navigate('/search')
        const user = result.data.user;

        setUser({
          email: user.email,
          username: user.username,
          id: user._id,
        })
      } else {
        navigate('/')
      }

    } catch (error) {
      navigate('/')
      console.log(error);
    }
  }

  return (
    <div className=" absolute sm:w-[400px] mx-auto mt-8 p-6 bg-white border rounded shadow-md">

      <div className='flex justify-end '>
        <span onClick={() => { navigate('/search') }} className='hover:bg-gray-300'>
          <i
            className="fa-solid  fa-xmark fa-xl" ></i>
        </span>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">Login Account</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email & UserName
          </label>
          <input
            required
            className="border outline-none rounded w-full py-2 px-3"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            required
            className="border outline-none rounded w-full py-2 px-3"
            type="current-password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <Link to='/forgot-password'>
            <p className='text-blue-600 hover:text-blue-500 active:text-red-600'>forgot password</p>
          </Link>
        </div>

        <button
          className="bg-blue-600 text-white hover:bg-blue-500 py-2 px-4 rounded bg-blue-600"
          type="button"
          onClick={handleLogin}
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

import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const submit = (e) => {
    e.preventDefault();
    try {
      axios.post('http://localhost:8000/api/v1/user/sendOTP', {
        email,
      }, { withCredentials: true })
        .then((res) => {
          console.log('success: ' + res.data.success);
          setEmail('')
        })
        .catch((error) => {
          console.error('otp error:', error);
        })
      navigate('/verifyotp')
    } catch (error) {
      console.log('forgot password:' + error);
    }
  }

  return (
    <form className='absolute flex flex-col  mx-auto mt-8 p-6 bg-white border rounded shadow-md' onSubmit={submit}>
      <h1 className='text-xl font-bold'>Send OTP on verified Mail </h1>
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none my-2 text-xl pl-1 border w-full ' placeholder='Enter valid Email' />
      <button type='submit' className='max-sm:w-full bg-blue-600 text-white p-2  hover:bg-blue-400'>Send</button>
    </form>
  )
}

export default ForgotPassword
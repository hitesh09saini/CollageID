
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { apiSendOTP } from '../../ContextApi/userApis'

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiSendOTP({ email: email });
      if (res.data.success) {
        navigate('/verifyotp')
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log('forgot password:' + error);
    }
  }

  return (
    <form className='absolute max-sm:w-full max-md:p-2 sm:w-[400px] flex flex-col  md:p-6 bg-white border rounded shadow-md' onSubmit={submit}>
      <h1 className='text-xl font-bold'>Send OTP on verified Mail </h1>
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none my-2 text-xl pl-1 border  ' placeholder='Enter valid Email' />
      <button type='submit' className='max-sm:w-full bg-blue-600 text-white p-2  hover:bg-blue-400'>Send</button>
    </form>
  )
}

export default ForgotPassword
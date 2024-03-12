
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { apiVerifyOTP } from '../../ContextApi/userApis'

const VerifyOtp = () => {
  const [user, setUser] = useState({
    email: '',
    otp: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiVerifyOTP(user);
      console.log('API Response:', response.data);

      if (response.data.success) {
        // Handle success scenario
        console.log('Verification successful');
        setUser({
          email: '',
          otp: ''
        });
        navigate('/search')
      } else {
        // Handle failure scenario or specific error messages
        console.error('Verification failed:', response.data.message);
        // You can provide feedback to the user based on the response
      }
    } catch (error) {
      console.error('Error during verification:', error.message);
      // Handle other types of errors (e.g., network issues)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='absolute max-sm:w-full max-md:p-2 sm:w-[400px] flex flex-col  md:p-6 bg-white border rounded shadow-md'
    >
      <input
        required
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className='outline-none my-2 text-xl pl-1 border'
        placeholder='E-mail'
      />
      <input
        required
        type="text"
        value={user.otp}
        onChange={(e) => setUser({ ...user, otp: e.target.value })}
        className='outline-none my-2 text-xl pl-1 border'
        placeholder='OTP'
      />
      <button type='submit' className='bg-blue-600 text-white p-2 hover:bg-blue-400'>
        Login
      </button>
      {/* <Link className='text-blue-600 hover:text-blue-500 active:text-red-600' to="/reset-password"> Reset your password</Link> */}
      <p className='text-gray-500'>OTP is valid only for 3 minutes</p>
    </form>
  );
};

export default VerifyOtp;

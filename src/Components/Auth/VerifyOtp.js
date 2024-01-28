import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
  const [user, setUser] = useState({
    email: '',
    otp: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/user/verifyOTP', {
        user,
      }, { withCredentials: true });

      console.log('API Response:', response.data);

      if (response.data.success) {
        // Handle success scenario
        console.log('Verification successful');
        setUser({
          email: '',
          otp: ''
        });
        navigate('/login');
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
      className='absolute flex flex-col mx-auto mt-8 p-6 bg-white border rounded shadow-md'
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
        Verify OTP
      </button>
      <p className='text-gray-500'>OTP is valid only for 3 minutes</p>
    </form>
  );
};

export default VerifyOtp;

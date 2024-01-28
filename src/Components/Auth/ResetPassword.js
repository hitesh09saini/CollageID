import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';


const ResetPassword = () => {
    const [user, setUser] = useState({
        email: '',
        otp: '',
        password: '',
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
            console.log('Verification successful');
            setUser({
              email: '',
              otp: '',
              password: ''
            });
            navigate('/login');
          } else {
            console.error('Verification failed:', response.data.message);
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
            <h1 className='text-xl font-bold text-center'>Change Password</h1>
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
          <input
            required
            type="text"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className='outline-none my-2 text-xl pl-1 border'
            placeholder='new password'
          />
          <button type='submit' className='bg-blue-600 text-white p-2 hover:bg-blue-400'>
            Login 
          </button>
          <Link className='text-blue-600 hover:text-blue-500 active:text-red-600' to="/reset-password"> Reset your password</Link>
          <p className='text-gray-500'>OTP is valid only for 3 minutes</p>
        </form>
  )
}

export default ResetPassword
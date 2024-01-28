import './body.css';
import Signin from '../Auth/SigninPage';
import Login from '../Auth/LoginPage';
import ForgotPassword from '../Auth/ForgotPassword'
import VerifyOtp from '../Auth/VerifyOtp'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Search from '../Search/Search';
import { useEffect, useState } from 'react';

const Body = () => {
  const navigate = useNavigate();
  const [islogin, setLogin] = useState(false);
  useEffect(() => {
    if (islogin) {
      navigate('/search');
    } else {
      navigate('/login')
    }
  }, []);

  return (
    <div className='body-cont'>
      <Routes>
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/verifyotp' element={<VerifyOtp />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>

    </div>
  );
};

export default Body;


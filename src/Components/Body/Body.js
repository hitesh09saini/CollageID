import './body.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Signin from '../Auth/Signin';
import Login from '../Auth/Login';
import ForgotPassword from '../Auth/ForgotPassword';
import VerifyOtp from '../Auth/VerifyOtp';
// import ResetPassword from '../Auth/ResetPassword';
import Search from '../Search/Search';
import { apiIsLogin } from '../../ContextApi/userApis'
import { useEffect } from 'react';
import { useAppContext } from '../../ContextApi/AppContext';



const Body = () => {
  const {setUser} = useAppContext();

  const navigate = useNavigate();

  const verifyLogin = async () => {
    try {
      const res = await apiIsLogin();
      console.log(res.data.user);
      if (res.data.success) {
        const user = res.data.user;
        setUser({
          email: user.email,
          username: user.username,
          id: user._id,

        })
        navigate('/search')
      } else {
        navigate('/')
      }
    } catch (error) {
      navigate('/')
      console.log(error);
    }
  }

  useEffect(() => {
    verifyLogin()
  }, [])

  return (
    <div className='body-cont'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/verifyotp' element={<VerifyOtp />} />
        <Route path='/search' element={<Search />} />
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  );
};

export default Body;

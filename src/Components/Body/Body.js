import './body.css';
import Signin from '../Auth/SigninPage';
import Login from '../Auth/LoginPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Search from '../Search/Search';
import { useEffect } from 'react';

const Body = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/signin');
  }, []);

  return (
    <div className='body-cont'>
      <Routes>
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  );
};

export default Body;


import React from 'react'
import logo from '../../assets/collegeID.png'
import './header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../ContextApi/AppContext';
import { apiLogout } from '../../ContextApi/userApis';

const Header = () => {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const res = await apiLogout();
      console.log(res.data.success);
      if (res.data.success) {
        navigate('/')
        setUser({
          email: '',
          username: '',
          id: '',
        })
      }
    } catch (error) {
      navigate('/')
      console.log(error);
    }
  }

  return (
    <div className='header-cont flex justify-between '>
      <Link to='/search'><img className='img' src={logo} alt="" /></Link>

      {
        user.email ? (
          <div title={user.username} onClick={handleLogout} className='bg-blue-600 text-white rounded hover:bg-blue-400 active:text-red-500 p-2 mr-2'>
            Logout
          </div>
        ) : (
          <div className='bg-red-600 p-2 mr-2'>

          </div>
        )
      }

    </div>
  )
}

export default Header

import React from 'react'
import logo from '../../assets/collegeID.png'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-cont '>
      <Link to='/search'><img className='img' src={logo} alt="" /></Link>
    </div>
  )
}

export default Header

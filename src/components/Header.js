import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <>
      <nav>Get ready to complete your daily tasks</nav>
      <div className='header'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/user'>User</Link>
      </div>

    </>
  )
}

export default Header;

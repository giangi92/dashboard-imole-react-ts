import React from 'react';
import logo from '../logo.svg';
import UserIcon from './usericon';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="App-logo"></img>
      <UserIcon></UserIcon>
    </div>
  )
}

export default Navbar;
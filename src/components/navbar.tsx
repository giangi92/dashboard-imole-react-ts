import React from 'react';
import logo from '../logo.svg';
import UserIcon from './usericon';
import UseStyles from './material-styles';

const Navbar = () => {
  const style = UseStyles().header;
  return (
    <div className={`${style} navbar`}>
      <img src={logo} alt="logo" className="App-logo"></img>
      <UserIcon></UserIcon>
    </div>
  )
}

export default Navbar;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import menuButton from '../assets/img/threelines.png'

const Sidebar = (props: any) => {
  let sidebarClassName = 'sidebar';
  let shrinkSidebar = 'shrink-sidebar';
  const [showMenu, setShowMenu] = useState(false);
  let shrinkMenu = props.shrinkMenu;
  const setShrinkMenu = props.setShrinkMenu;

  sidebarClassName = showMenu ? 'sidebar mobile-active' : 'sidebar';
  shrinkSidebar = shrinkMenu ? 'shrink-sidebar' : '';

  return (
    <div>
      <div className='menu-button'><button onClick={() => setShowMenu(!showMenu)}><img src={menuButton} alt='menu'/></button></div>
      <nav className={sidebarClassName + ' ' + shrinkSidebar}>
        <ul>
          <li>
            <NavLink activeClassName='active' to="/home"><FontAwesomeIcon icon = {faHome} />Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to="/users"><FontAwesomeIcon icon = {faUser} />Utenti</NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to="/vendors"><FontAwesomeIcon icon = {faRegistered} />Prenotazioni</NavLink>
          </li>
        </ul>
        <button className='end-sidebar' onClick={() => setShrinkMenu(!shrinkMenu)}>
          <div>
            <h3>
              {shrinkMenu ? <FontAwesomeIcon icon = {faArrowRight} /> : <FontAwesomeIcon icon = {faArrowLeft} />}
            </h3>
          </div>
        </button>
      </nav>
    </div>
  )
}

export default Sidebar;
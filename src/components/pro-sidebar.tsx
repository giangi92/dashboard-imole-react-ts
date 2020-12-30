import { faGem, faHeart, faUser, faRegistered, faArrowRight, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarContent, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

const MyProSidebar = (props: any) => {
    let shrinkSidebar = '';
    let shrinkMenu = props.shrinkMenu;
    const setShrinkMenu = props.setShrinkMenu;

    shrinkSidebar = shrinkMenu ? 'collapsed' : '';

    return (
        <div className='sidebar'>
            <ProSidebar collapsed={shrinkMenu} breakPoint="md" toggled={props.toggled} onToggle={props.handleToggleSidebar}>
                <SidebarHeader>
                    <h1>Mitico Imole</h1>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem icon={<FontAwesomeIcon icon={faGem} />} >
                            Home
                            <Link to="/home" />
                        </MenuItem>
                        <SubMenu title="Components" icon={<FontAwesomeIcon icon={faHeart} />}>
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                        <MenuItem icon={<FontAwesomeIcon icon={faUser} />}>Utenti <Link to="/users" /></MenuItem>
                        <MenuItem icon={<FontAwesomeIcon icon={faRegistered} />}>Prenotazioni <Link to="/vendors" /></MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <button className='end-sidebar' onClick={() => setShrinkMenu(!shrinkMenu)}>
                        <div>
                            <h3>
                                {shrinkMenu ? <FontAwesomeIcon icon={faArrowRight} /> : <FontAwesomeIcon icon={faArrowLeft} />}
                            </h3>
                        </div>
                    </button>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}

export default MyProSidebar;
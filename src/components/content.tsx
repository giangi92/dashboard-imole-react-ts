import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';

const Content = ( props: any ) => {
  console.log(props);
  
  const shrinkPage = props.shrinkPage;

  let classUsed = shrinkPage ? 'content shrink-page' : 'content';

  return (
    <div className = {classUsed}>
      <div className="btn-toggle" onClick={() => props.handleToggleSidebar(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      {props.children}
    </div>
  )
}

export default Content;
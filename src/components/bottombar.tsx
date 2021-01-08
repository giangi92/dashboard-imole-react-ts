import React from 'react';
import Content from './content';

const BottomBar = (props: any) => {
  const shrinkPage = props.shrinkPage;
  let classUsed = shrinkPage ? 'content shrink-page' : 'content';
  return (
    <div className = {classUsed}>
      <div className='bottom-bar'>
        <p>Fatto da Giangisoft</p>
      </div>
    </div>
  )
}

export default BottomBar;
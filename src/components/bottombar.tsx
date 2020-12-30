import React from 'react';
import Content from './content';

const BottomBar = (props: any) => {
  return (
    <Content {...props}>
      <div className='bottom-bar'>
        <p>Fatto da Giangisoft</p>
      </div>
    </Content>
  )
}

export default BottomBar;
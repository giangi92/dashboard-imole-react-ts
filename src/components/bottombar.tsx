import React from 'react';
import Content from './content';
import UseStyles from './material-styles';

const BottomBar = (props: any) => {
  const shrinkPage = props.shrinkPage;
  const style = UseStyles().footer;
  let classUsed = shrinkPage ? 'content shrink-page' : 'content';
  return (
    <div className = {classUsed}>
      <div className={`${style} bottom-bar`}>
        <p>Fatto da Giangisoft</p>
      </div>
    </div>
  )
}

export default BottomBar;
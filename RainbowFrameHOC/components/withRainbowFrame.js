import React from 'react';

const withRainbowFrame = colors => Component => props =>{
  let content = props.children;
  colors.forEach(item => {
    content = <div style={{border:"solid 10px "+item,padding:"10px"}}>{content}</div>;
  });

  return content

}

export { withRainbowFrame };

import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  
  render() {
    let text = this.props.children;
    this.props.colors.forEach(item => {
      text=<div style={{border:"solid 10px "+item,padding:"10px"}}>{text}</div>;
    });

    return text
  }
 
}

export default RainbowFrame;

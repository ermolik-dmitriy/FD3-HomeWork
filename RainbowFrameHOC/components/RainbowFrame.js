import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

import { withRainbowFrame } from './withRainbowFrame';
import { Fragment } from 'react';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  
  render() {
    let FramedFragment=withRainbowFrame(this.props.colors)(Fragment);
    return (
      <FramedFragment>
        Hello!
      </FramedFragment>
    );
  }
 
}

export default RainbowFrame;

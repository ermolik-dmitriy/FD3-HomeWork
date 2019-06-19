import React from 'react';
import PropTypes from 'prop-types';

import './Br2jsx.css';

class Br2jsx extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render() {
    let arrayWords = this.props.text.split(/<br *\/?>/);
    let readyCode = [];
    arrayWords.forEach((item,i) => {
      readyCode.push(item);
      if(i!==arrayWords.length-1)
        readyCode.push(<br/>);
    });
    return <div className="br2jsx">{readyCode}</div>
  }

}

export default Br2jsx;

import React from 'react';
import PropTypes from 'prop-types';

import './CardProduct.css';

class CardProduct extends React.Component{

    displayName = 'CardProduct';

    static propTypes = {
        selectedRow: PropTypes.object.isRequired,
    };

    render (){ 

        return (
        (this.props.selectedRow.isDelete)
        ?
        null
        :    
        <div className='cardProduct'>
            <h1 className='headCard'>{this.props.selectedRow.nameProd}</h1>
            <p className='descriptionProduct'>qwerty</p>
            <span>Price:{this.props.selectedRow.costProd}</span>
        </div>
        )
       
    };

}

export default CardProduct;
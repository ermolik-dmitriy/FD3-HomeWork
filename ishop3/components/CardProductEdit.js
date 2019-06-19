import React from 'react';
import PropTypes from 'prop-types';

import './CardProductEdit.css';

class CardProductEdit extends React.Component{

    displayName = 'CardProductEdit';

    static propTypes = {
        selectedRow: PropTypes.object.isRequired,
        cbSaveEditCard: PropTypes.func.isRequired,
        cbCancelEditCard: PropTypes.func.isRequired,
        cbCancelAddCard: PropTypes.func.isRequired,
        cbAddEditCard: PropTypes.func.isRequired,
        workModeEditCard : PropTypes.number.isRequired,
        maxId : PropTypes.number.isRequired,
    };

    state = {
        code : this.props.selectedRow.code,
        nameProd : this.props.selectedRow.nameProd,
        costProd : this.props.selectedRow.costProd,
        urlProd : this.props.selectedRow.urlProd,
        countProd : this.props.selectedRow.countProd,
        nameError : '',
        costError : '',
        urlError : '',
        countError : '',
    };
    
    componentWillMount = () => {
        if ( this.props.workModeEditCard==2 ) 
            this.setState({nameProd : '', costProd : '' , urlProd : '', countProd : '', code : (this.props.maxId+1), selectedItemId: 0, isDelete: 0})   
    };

    componentWillReceiveProps = (newProps) => { 
        this.setState( {nameProd: newProps.selectedRow.nameProd, costProd : newProps.selectedRow.costProd, urlProd : newProps.selectedRow.urlProd, countProd : newProps.selectedRow.countProd,} )
    };

    saveEditCard = () => {
        this.props.cbSaveEditCard({...this.props.selectedRow,nameProd : this.state.nameProd, costProd : this.state.costProd , urlProd : this.state.urlProd, countProd : this.state.countProd});
    }

    addEditCard = () => {
    
        this.props.cbAddEditCard({nameProd : this.state.nameProd, costProd : this.state.costProd , urlProd : this.state.urlProd, countProd : this.state.countProd, code : (this.props.maxId+1), selectedItemId: 0, isDelete: 0});
    }

    cancelEditCard = () => {
        this.props.cbCancelEditCard();
    }

    cancelAddCard = () => {
        this.props.cbCancelAddCard();
    }

    validateField = (EO) =>{

        switch(EO.target.name) {
            case 'nameProd': {
                if(!EO.target.value)
                    this.setState( {nameError: 'Введите имя!'} )
                else if(EO.target.value.length>20)
                    this.setState( {nameError: 'Длинна имени не должна привышать 20 символов!'} )
                else 
                    this.setState( {nameError: ''} )
                break;
            }
            case 'priceProd': {
                if(!EO.target.value)
                    this.setState( {costError: 'Введите стоимость!'} )
                else if(!isFinite(EO.target.value))
                    this.setState( {costError: 'Введите cтоимость числом!'} )
                else 
                    this.setState( {costError: ''} )
                break;
            }
            case 'urlProd': {
                if(!EO.target.value)
                    this.setState( {urlError: 'Введите url!'} )
                else 
                    this.setState( {urlError: ''} )
                break;
            }
            case 'countProd': {
                if(!EO.target.value)
                    this.setState( {countError: 'Введите количество товара!'} )
                else if(!isFinite(EO.target.value))
                    this.setState( {countError: 'Введите количество числом!'} )
                else 
                    this.setState( {countError: ''} )
                break;
            }
        }
    }
    
    render (){ 
       return <div className='cardProductEdit'>
            <h1 className='productEditHead'>{(this.props.workModeEditCard==1)?'Edit Existing Product':'Add new product'}</h1>
            <span className='productEditId'>ID:{(this.props.workModeEditCard==1)?this.props.selectedRow.code:(this.props.maxId+1)}</span>
            <label className='rowProductEdit'>Name: <input name='nameProd' type='text' onBlur={this.validateField} onChange={(EO)=>this.setState( {nameProd: EO.target.value} )} value={this.state.nameProd} /><span style={{color:'red'}}>{this.state.nameError}</span></label>
            <label className='rowProductEdit'>Price: <input name='priceProd'type='text' onBlur={this.validateField} onChange={(EO)=>this.setState( {costProd: EO.target.value} )} value={this.state.costProd} /><span style={{color:'red'}}>{this.state.costError}</span></label>
            <label className='rowProductEdit'>URL: <input name='urlProd'type='text' onBlur={this.validateField} onChange={(EO)=>this.setState( {urlProd: EO.target.value} )} value={this.state.urlProd}/><span style={{color:'red'}}>{this.state.urlError}</span></label>
            <label className='rowProductEdit'>Quantity: <input name='countProd'type='text' onBlur={this.validateField} onChange={(EO)=>this.setState( {countProd: EO.target.value} )} value={this.state.countProd} /><span style={{color:'red'}}>{this.state.countError}</span></label>
            <input className='buttonSaveEdit' type='button'value={(this.props.workModeEditCard==1)?'Save':'Add'} onClick={(this.props.workModeEditCard==1)?this.saveEditCard:this.addEditCard} disabled={!(!this.state.nameError&&!this.state.costError&&!this.state.urlError&&!this.state.countError)}/>
            <input className='buttonCancelEdit' type='button'value='Cancel' onClick={(this.props.workModeEditCard==1)?this.cancelEditCard:this.cancelAddCard}/>
       </div>
    };
  
}

export default CardProductEdit;
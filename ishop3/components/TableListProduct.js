import React from 'react';
import PropTypes from 'prop-types';

import'./TableListProduct.css';

import RowProduct from './RowProduct';
import CardProduct from './CardProduct';
import CardProductEdit from './CardProductEdit';

class TableListProduct extends React.Component{

    displayName = 'TableListProduct';

    static propTypes = {
        name: PropTypes.string.isRequired,
        products: PropTypes.array.isRequired,
    };

    state = {
        selectedItemRow : 0,
        products : this.props.products,
        cardMode : 0,
        workModeEditCard : 1,
        buttonEditDisabled: 0
    };

    rowClick = (idRow) => {
        this.setState( { selectedItemRow : idRow, cardMode: 1} );
    };
    
    buttonClick = (idRow) =>{
        var isDeleted = confirm('Хотите удалить строку');
        var newArrayProducts=this.state.products;
        if(isDeleted){
            this.state.products.forEach(function(item,i){
                if(item.code==idRow){
                    newArrayProducts=newArrayProducts.slice();
                    newArrayProducts.splice(i,1);
                }
            });
            this.setState( { products: newArrayProducts} );
        }
    };

    buttonEditClick = (idRow) =>{
        this.setState( { selectedItemRow : idRow, cardMode: 2, workModeEditCard : 1} );
    };

    saveEditCard = (newItemHash) => {
        var newState=this.state.products.map(item=> {
            if(item.code==newItemHash.code){
                return newItemHash
            }else{
                return item
            }
        });
        this.setState( { products: newState,  cardMode: 1,buttonEditDisabled : 0} );
    };
    
    cancelEditCard = () => {
        this.setState( {cardMode: 1, workModeEditCard : 1,buttonEditDisabled : 0} );
    };

    cancelAddCard = () => {
        this.setState( {cardMode: 0, workModeEditCard : 1,buttonEditDisabled : 0} );
    };

    addEditCard = (newProduct) => {
       var  newState = this.state.products;
       newState.push(newProduct);
       this.setState( { products: newState,  cardMode: 0, workModeEditCard : 1,buttonEditDisabled : 0} );
    };

    changeWorkModeCardEdit = ()=> {
        this.setState( {selectedItemRow : 0, workModeEditCard: 2,cardMode : 2} );
    };

    editDisabled = () => {
        this.setState({buttonEditDisabled : 1});
    };

    render(){
        var selectedRow = {};

        this.state.products.forEach((item, i) => {
            if(item.code==this.state.selectedItemRow){
                selectedRow=(this.state.workModeEditCard!=2)?item:{nameProd:'', costProd :'', urlProd:'', countProd:'', code: ''};
            }
        });

        var productsCode=this.state.products.map( (item) => 
            <RowProduct selectedItemRow={this.state.selectedItemRow} buttonEditDisabled={this.state.buttonEditDisabled} workModeEditCard={this.state.workModeEditCard} cardMode={this.state.cardMode} idRow={item.code} key={item.code} cbButtonEditClick={this.buttonEditClick} cbButtonClick={this.buttonClick} cbRowClick={this.rowClick} nameProd={item.nameProd} costProd={item.costProd} urlProd={item.urlProd} countProd={item.countProd} />
        );

        return <div className='main'>
            <table className='tableProd'>
            <caption className='tableProd--caption'>{this.props.name}</caption>
            <thead className='tableProd--head'>
                <tr className='tableHead--row'>
                    <td className='tableRow--cell'>Name</td>
                    <td className='tableRow--cell'>Price</td>
                    <td className='tableRow--cell'>Url</td>
                    <td className='tableRow--cell'>Quantity</td>
                    <td className='tableRow--cell'>Control</td>
                </tr>
            </thead>
            <tbody className='tableProd--body'>
            {productsCode}
            </tbody>
        </table>
        <button onClick={this.changeWorkModeCardEdit} disabled={(this.state.cardMode==2)? true:false} className='button--new-product'>New product</button>
        {this.state.cardMode==1&&<CardProduct selectedRow={selectedRow}/>}
        {this.state.cardMode==2&&<CardProductEdit buttonEditDisabled={this.state.buttonEditDisabled} cbEditDisabled={this.editDisabled} workModeEditCard={this.state.workModeEditCard} cbAddEditCard={this.addEditCard} cbCancelAddCard={this.cancelAddCard} cbCancelEditCard={this.cancelEditCard} cbSaveEditCard={this.saveEditCard} selectedRow={selectedRow}/>}
        </div>
    };
}

export default TableListProduct;

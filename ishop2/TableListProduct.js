var TableListProduct = React.createClass({

    displayName: 'TableListProduct',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        products: React.PropTypes.array.isRequired,
    },

    getInitialState: function () {
        return {products: this.props.products, selectedItemId:0,};
    },

    rowClick : function (idRow) {
        this.setState( { selectedItemId: idRow} );
    },
    
    buttonClick : function (idRow) {
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
    },

    render: function(){

        var productsCode=this.state.products.map( (item,i) => 
            React.createElement(RowProduct , {selectedItemId:this.state.selectedItemId, idRow:item.code, key:item.code ,cbButtonClick:this.buttonClick, cbRowClick:this.rowClick, nameProd:item.nameProd, costProd:item.costProd, urlProd:item.urlProd, countProd:item.countProd} )
        );

        return React.DOM.table( {className:'tableProd'},
            React.DOM.caption({className:'tableProd--caption'}, this.props.name), 
            React.DOM.thead( {className:'tableProd--head'},
                React.DOM.tr({className:'tableHead--row'},
                    React.DOM.td({className:'tableRow--cell'}, "Name"),
                    React.DOM.td({className:'tableRow--cell'}, "Price"),
                    React.DOM.td({className:'tableRow--cell'}, "Url"),
                    React.DOM.td({className:'tableRow--cell'}, "Quatity"),
                    React.DOM.td({className:'tableRow--cell'}, "Control"))), 
            React.DOM.tbody( {className:'tableProd--body'}, productsCode)
        );
    },

});
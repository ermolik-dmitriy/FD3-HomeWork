var TableListProduct = React.createClass({

    displayName: 'TableListProduct',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        products: React.PropTypes.array.isRequired,
    },

    getInitialState: function () {
        var selectedItemId=[];
        var isDelete=[]
        this.props.products.forEach((item,i) => 
            selectedItemId[i]=(item.selectedItemId)
        );
        this.props.products.forEach((item,i) => 
            isDelete[i]=(item.isDelete)
        );
        return {
            selectedItemId,
            isDelete
        };
    },

    rowClick : function (idRow) {
        var newSelectedItemId=[];
        this.state.selectedItemId.forEach(function(item,i){
            if(parseInt(idRow-1)==i)
                newSelectedItemId.push(1);
            else
                newSelectedItemId.push(0);
        });
        this.setState( { selectedItemId: newSelectedItemId} );
    },
    
    buttonClick : function (idRow) {
        var isDeleted = confirm('Хотите удалить строку');
        var newIsDelete=[];
        if(isDeleted){
            this.state.isDelete.forEach(function(item,i){
                if(parseInt(idRow-1)==i || item==1)
                    newIsDelete.push(1);
                else
                    newIsDelete.push(0);
            });
            this.setState( { isDelete: newIsDelete} );
        }
    },

    render: function(){

        var productsCode=this.props.products.map( (item,i) => 
            React.createElement(RowProduct , {isDelete:this.state.isDelete[i], selectedItemId:this.state.selectedItemId[i], idRow:item.code, key:item.code ,cbButtonClick:this.buttonClick, cbRowClick:this.rowClick, nameProd:item.nameProd, costProd:item.costProd, urlProd:item.urlProd, countProd:item.countProd} )
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
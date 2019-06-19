var TableListProduct = React.createClass({

    displayName: 'TableListProduct',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        products: React.PropTypes.array.isRequired,
    },
  
    render: function(){
  
        var productsCode=[];

        this.props.products.forEach(function (item){
            var productCode=        
                React.DOM.tr({key:item.code,className:'tableBody--row'},
                    React.DOM.td({className:'tableRow--cell'},item.nameProd),
                    React.DOM.td({className:'tableRow--cell'},item.costProd),
                    React.DOM.td({className:'tableRow--cell'},item.urlProd),
                    React.DOM.td({className:'tableRow--cell'},item.countProd)
                );
            productsCode.push(productCode);
        });

        return React.DOM.table( {className:'tableProd'},
            React.DOM.caption({className:'tableProd--caption'}, this.props.name), 
            React.DOM.thead( {className:'tableProd--head'},
                React.DOM.tr({className:'tableHead--row'},
                    React.DOM.td({className:'tableRow--cell'}, "Name"),
                    React.DOM.td({className:'tableRow--cell'}, "Price"),
                    React.DOM.td({className:'tableRow--cell'}, "Url"),
                    React.DOM.td({className:'tableRow--cell'}, "Quatity"))), 
            React.DOM.tbody( {className:'tableProd--body'}, productsCode)
        );
    },
  
});
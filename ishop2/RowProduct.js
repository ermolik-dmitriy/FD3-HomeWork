var RowProduct = React.createClass({

    displayName: 'RowProduct',

    propTypes: {
        nameProd: React.PropTypes.string.isRequired,
        costProd: React.PropTypes.number.isRequired,
        urlProd: React.PropTypes.string.isRequired,
        countProd: React.PropTypes.number.isRequired,
        cbRowClick: React.PropTypes.func.isRequired,
        idRow: React.PropTypes.number.isRequired,
        selectedItemId: React.PropTypes.number.isRequired,
    },

    rowClick : function () {
        this.props.cbRowClick(this.props.idRow);
    },

    buttonClick : function (EO) {
        EO.stopPropagation();
        this.props.cbButtonClick(this.props.idRow);
    },

    render: function(){
        if(this.props.selectedItemId!=this.props.idRow){
            return  React.DOM.tr({className:'tableBody--row', onClick: this.rowClick},
            React.DOM.td({className:'tableRow--cell'},this.props.nameProd),
            React.DOM.td({className:'tableRow--cell'},this.props.costProd),
            React.DOM.td({className:'tableRow--cell'},this.props.urlProd),
            React.DOM.td({className:'tableRow--cell'},this.props.countProd),
            React.DOM.td({className:'tableRow--cell'},
                React.DOM.button({className:'button--delete', onClick: this.buttonClick},'Delete'))
            );  
        }else{
            return  React.DOM.tr({style:{backgroundColor:'red'}, className:'tableBody--row', onClick: this.rowClick},
            React.DOM.td({className:'tableRow--cell'},this.props.nameProd),
            React.DOM.td({className:'tableRow--cell'},this.props.costProd),
            React.DOM.td({className:'tableRow--cell'},this.props.urlProd),
            React.DOM.td({className:'tableRow--cell'},this.props.countProd),
            React.DOM.td({className:'tableRow--cell'},
                React.DOM.button({className:'button--delete', onClick: this.buttonClick},'Delete'))
            ); 
        }
        
    },

});
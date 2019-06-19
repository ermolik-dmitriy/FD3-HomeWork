var Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
        arrayRows: React.PropTypes.array.isRequired,
    },

    getInitialState: function () {
        return {
            sorted: false,
            filtered:"",
            arrayStrs:null || this.props.arrayRows,
        };
      },
    
    resultArray: function(){
        var result = this.props.arrayRows;
        if(this.state.arrayStrs){
            result = result.filter(item => 
                item.indexOf(this.state.filtered)==-1 ? false:true
            );
        }else{
            result = result.slice();
        }
        if(this.state.sorted)
            result.sort();
        this.setState( {arrayStrs: result} );   
    },

    resetClick: function(){
        this.setState( {sorted:false, filtered: ""} , this.resultArray);
    },

    checkboxClick: function(EO){
        this.setState( {sorted:EO.target.checked} , this.resultArray);
    },

    filteredChange: function(EO){
        this.setState( {filtered:EO.target.value} , this.resultArray);
    },
  
    render: function(){

        var selectCode=this.state.arrayStrs.map( item => 
            React.DOM.option({key:item}, item )
        );

        return  React.DOM.form({name:'mainForm'},   
            React.DOM.input({type:'checkbox', name:'sorter',checked:this.state.sorted, onClick:this.checkboxClick}),
            React.DOM.input({type:'text', name:'filter',value:this.state.filtered, onChange:this.filteredChange}),
            React.DOM.input({type:'button', name:'reset',value:"сброс", onClick:this.resetClick}),
            React.DOM.select({multiple:true, name:'listStrs'}, selectCode))
    },
});
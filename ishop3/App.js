"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import TableListProduct from './components/TableListProduct';

var nameShop ='shop1';

var listProduct=require('./listProduct.json');

ReactDOM.render(
    <TableListProduct name={nameShop} products={listProduct} />

    ,document.getElementById('container') 
);
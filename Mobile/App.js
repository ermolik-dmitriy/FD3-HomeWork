"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[ 
  {id:1123, surname:"Иванов", name: "Иван", patronymic:"Иванович", balance:200}, 
  {id:2212, surname:"Сидоров", name: "Сидр", patronymic:"Сидорович", balance:250}, 
  {id:3233, surname:"Петров", name: "Петр", patronymic:"Петрович", balance:-180},
  {id:5554, surname:"Григорьев", name: "Григорий", patronymic:"Григорьевич", balance:220},
];

ReactDOM.render(
  <MobileCompany name={companyName} clients={clientsArr}/>
  , document.getElementById('container') 
);


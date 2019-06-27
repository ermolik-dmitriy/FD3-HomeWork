import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

let clientsArr=[ 
    {id:1123, surname:"Иванов", name: "Иван", patronymic:"Иванович", balance:200}, 
    {id:2212, surname:"Сидоров", name: "Сидр", patronymic:"Сидорович", balance:250}, 
    {id:3233, surname:"Петров", name: "Петр", patronymic:"Петрович", balance:-180},
    {id:5554, surname:"Григорьев", name: "Григорий", patronymic:"Григорьевич", balance:220},
  ];

test('тестируем MobileCompany (фильтрация клиентов)', () => {

    const component = renderer.create(
        <MobileCompany
        clients={clientsArr}
    />
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    
    component.getInstance().changeViewActive();
    
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    
    component.getInstance().changeViewBlock();
  
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    component.getInstance().changeViewAll();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('тестируем MobileCompany (удаление клиента)', () => {

    const component = renderer.create(
        <MobileCompany
        clients={clientsArr}
    />
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    
    component.getInstance().deleteClient(2212);
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('тестируем MobileCompany (редактирование клиента)', () => {

    const component = renderer.create(
        <MobileCompany
        clients={clientsArr}
    />
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    
    let cliendData = {id:3233, surname:"Александров", name: "Александр", patronymic:"Александрович", balance:-180};
    component.getInstance().saveEdit(cliendData);

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('тестируем MobileCompany (добавление клиента)', () => {

    const component = renderer.create(
        <MobileCompany
        clients={clientsArr}
    />
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
    
    let cliendData = {id:5554, surname:"Соломонов", name: "Соломон", patronymic:"Соломонович", balance:-2220};
    component.getInstance().addNewClient (cliendData);
  
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});
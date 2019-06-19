import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import ClientEdit from './ClientEdit';
import {clientEvents} from './events';

import './MobileCompany.css';

import memoize from 'memoizee'; 

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.array.isRequired,
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    changedClient: 0,
    workMode: 0,
    workModeEditClient: 0,
    viewMode : 0,
  };

  componentDidMount = () => {
    clientEvents.addListener('EditButtonClicked',this.editClient);
    clientEvents.addListener('CancelEdit',this.cancelEdit);
    clientEvents.addListener('SaveEdit',this.saveEdit);
    clientEvents.addListener('AddNewClient',this.addNewClient);
    clientEvents.addListener('DeleteClient',this.deleteClient);
  };

  componentWillUnmount = () => {
    clientEvents.removeListener('EditButtonClicked',this.editClient);
    clientEvents.removeListener('CancelEdit',this.cancelEdit);
    clientEvents.removeListener('SaveEdit',this.saveEdit);
    clientEvents.removeListener('AddNewClient',this.addNewClient);
    clientEvents.removeListener('DeleteClient',this.deleteClient);
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };

  editClient = (idClient) => {
    this.setState({workMode: 1, changedClient: idClient,workModeEditClient: 1,});
  }

  cancelEdit= () => {
    this.setState({workMode: 0});
  }

  saveEdit = (newInfoClient) => {
    let newClients=[...this.state.clients];
    newClients.forEach( (c,i) => {
      if ( c.id==newInfoClient.id) {
        let newClient={...c};
        newClient=newInfoClient;
        newClients[i]=newClient;
      }
    } );
    this.setState({clients: newClients, workMode: 0});
  }

  changeWorkModeEdit = () => {
    this.setState({workMode: 1, workModeEditClient: 2,});
  }

  addNewClient = (newClient) => {
    let newClients = [...this.state.clients, newClient]
    this.setState({workMode: 0, clients : newClients});
  }

  deleteClient = (IdDeleteClient) => {
    let newClients = [...this.state.clients];
    let index=null;

    newClients.forEach( (c,i) => {
      if (c.id==IdDeleteClient) {
        index = i;
      }
    } );

    newClients=newClients.slice();
    newClients.splice((index),1);
    
    this.setState({clients: newClients,});
  }

  changeViewAll = () => {
    this.setState({viewMode : 0});
  }

  changeViewActive = () => {
    this.setState({viewMode : 1});
  }

  changeViewBlock = () => {
    this.setState({viewMode : 2});
  }

  calc = (name,  surname, patronymic, balance) => {
    return {name:name, surname:surname, patronymic:patronymic, balance:balance};
  }

  calcMemoizeed=memoize(this.calc);

  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( (client,i) => {
      return(
      (this.state.viewMode==1&&client.balance<0||this.state.viewMode==2&&client.balance>0)
      ?
       null
      :
      <MobileClient key={client.id} workMode={this.state.workMode} id={client.id} clientInfo={this.calcMemoizeed(client.name, client.surname, client.patronymic, client.balance)}/>)
    }
    );

    let clientData = {};
    this.state.clients.forEach(client => {
        if(client.id==this.state.changedClient){
          clientData=client;
        }
    });

    return (
      <div className='mobileCompany'>
        <input type="button" value="МТС" onClick={this.setName1} disabled={(this.state.workMode==1)}/>
        <input type="button" value="Velcom" onClick={this.setName2} disabled={(this.state.workMode==1)}/>
        <div className='mobileCompanyName'>Компания: &laquo;{this.state.name}&raquo;</div>
        <hr />
        <input type="button" value="Все" onClick={this.changeViewAll} disabled={(this.state.workMode==1)}/>
        <input type="button" value="Активные" onClick={this.changeViewActive} disabled={(this.state.workMode==1)}/>
        <input type="button" value="Заблокированные" onClick={this.changeViewBlock} disabled={(this.state.workMode==1)}/>
        <hr />
        <table className='mobileCompanyClients'>
          <thead className='tableHead'>
            <tr className='tableHeadRow'>
              <td className='tableHeadRow--td'>Фамилия</td>
              <td className='tableHeadRow--td'>Имя</td>
              <td className='tableHeadRow--td'>Отчество</td>
              <td className='tableHeadRow--td'>Баланс</td>
              <td className='tableHeadRow--td'>Статус</td>
              <td className='tableHeadRow--td'>Редактировать</td>
              <td className='tableHeadRow--td'>Удалить</td>
            </tr>
          </thead>
          <tbody className='tableBody'>
            {clientsCode}
          </tbody>
        </table>
        <input className='buttonAdd' type="button" value="Добавить клиента"  onClick={this.changeWorkModeEdit} disabled={(this.state.workMode==1)}/>
        {this.state.workMode==1&&<ClientEdit workModeEditClient={this.state.workModeEditClient} clientInfo={clientData}/>}
      </div>
    )
    ;

  }

}

export default MobileCompany;

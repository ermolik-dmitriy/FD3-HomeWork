import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import {clientEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    clientInfo:PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      patronymic: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
    id: PropTypes.number.isRequired,
    workMode:PropTypes.number.isRequired,
  };

  editClient = () => {
    clientEvents.emit('EditButtonClicked',this.props.id);
  }

  deleteClient = () => {
    clientEvents.emit('DeleteClient',this.props.id);
  }

  render() {

    console.log("MobileClient id="+this.props.id+" render");
    
    return (
      <tr className='mobileClient'>
        <td className='mobileClientSurname'>{this.props.clientInfo.surname}</td>
        <td className='mobileClientName'>{this.props.clientInfo.name}</td>
        <td className='mobileClientPatronymic'>{this.props.clientInfo.patronymic}</td>
        <td className='mobileClientBalance'>{this.props.clientInfo.balance}</td>
        <td className='mobileClientStatus' style={(this.props.clientInfo.balance>0)?{backgroundColor:'green'}:{backgroundColor:'red'}}>{(this.props.clientInfo.balance>0?'active':'blocked')}</td>
        <td className='mobileClientButtonEdit'>
          <button className='buttonEdit' onClick={this.editClient} disabled={(this.props.workMode==1)}>Редактировать</button>
        </td>
        <td className='mobileClientButtonDelete'>
          <button className='buttonDelete' onClick={this.deleteClient} disabled={(this.props.workMode==1)}>Удалить</button>
        </td>
      </tr>
    );

  }

}

export default MobileClient;

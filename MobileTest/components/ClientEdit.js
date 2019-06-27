import React from 'react';
import PropTypes from 'prop-types';

import './ClientEdit.css';

import {clientEvents} from './events';

class ClientEdit extends React.PureComponent{

    displayName = 'ClientEdit';

    static propTypes = {
        clientInfo:PropTypes.object.isRequired,
        workModeEditClient:PropTypes.number.isRequired,
    };

    newSurnameRef = null;
    newNameRef = null;
    newPatronymicRef = null;
    newBalanceRef = null;
    newIdRef = null;
  
    newSurname = null;
    newName = null;
    newPatronymic = null;
    newBalance = null;
    newId = null;

    setNewSurnameRef = (ref) => {
        this.newSurnameRef=ref;
    };

    setNewNameRef = (ref) => {
        this.newNameRef=ref;
    };

    setNewPatronymicRef = (ref) => {
        this.newPatronymicRef=ref;
    };

    setNewBalanceRef = (ref) => {
        this.newBalanceRef=ref;
    };

    setNewIdRef = (ref) => {
        this.newIdRef=ref;
    }

    setStateEditClient = () => {
        clientEvents.emit('SaveEdit',{...this.props.clientInfo, surname: this.newSurname, name:this.newName, patronymic:this.newPatronymic, balance:this.newBalance});
    }

    setStateNewClient = () => {
        clientEvents.emit('AddNewClient',{...this.props.clientInfo, surname: this.newSurname, name:this.newName, patronymic:this.newPatronymic, balance:this.newBalance, id:this.newId});
    }

    saveEditClient = () => {
        this.newSurname = this.newSurnameRef.value;
        this.newName = this.newNameRef.value;
        this.newPatronymic = this.newPatronymicRef.value;
        this.newBalance = this.newBalanceRef.value;
        this.setStateEditClient();
    }

    cancelEdit = () => {
        clientEvents.emit('CancelEdit');
    }

    addNewClient = () => {
        this.newSurname = this.newSurnameRef.value;
        this.newName = this.newNameRef.value;
        this.newPatronymic = this.newPatronymicRef.value;
        this.newBalance = this.newBalanceRef.value;
        this.newId= this.newIdRef.value;
        this.setStateNewClient();
    }
    
    render (){ 

        console.log("Edit render");

        return <div className='clientProductEdit'>
            <h1 className='clientEditHead'>{(this.props.workModeEditClient==1)?'Редактирование клиента':'Добавление нового клиента'}</h1>
            {(this.props.workModeEditClient==1)
            ?
            <span className='clientEditId'>ID:{this.props.clientInfo.id}</span>
            :
            <label className='rowclientEditId'>ID:<input name='idClient' type='text' defaultValue={''} ref={this.setNewIdRef}/></label>
            }
            <label className='rowClientEdit'>Фамилия: <input name='surnameClient' type='text' defaultValue={(this.props.workModeEditClient==1)?this.props.clientInfo.surname:''} ref={this.setNewSurnameRef}/></label>
            <label className='rowClientEdit'>Имя: <input name='nameClient'type='text' defaultValue={(this.props.workModeEditClient==1)?this.props.clientInfo.name:''} ref={this.setNewNameRef}/></label>
            <label className='rowClientEdit'>Отчество: <input name='patronymicClient'type='text' defaultValue={(this.props.workModeEditClient==1)?this.props.clientInfo.patronymic:''} ref={this.setNewPatronymicRef}/></label>
            <label className='rowClientEdit'>Баланс: <input name='balanceClient'type='text' defaultValue={(this.props.workModeEditClient==1)?this.props.clientInfo.balance:''} ref={this.setNewBalanceRef}/></label>
            <input className='buttonSaveEdit' type='button'value={(this.props.workModeEditClient==1)?'Сохранить':'Добавить'} onClick={(this.props.workModeEditClient==1)?this.saveEditClient:this.addNewClient}/>
            <input className='buttonCancelEdit' type='button'value='Отмена' onClick={this.cancelEdit}/>
        </div>
    };
  
}

export default ClientEdit;
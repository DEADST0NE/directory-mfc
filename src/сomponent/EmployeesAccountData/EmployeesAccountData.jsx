import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'; 
import Button from 'react-bootstrap/Button';
import ModalWindow from '../ModalWindow';

import PutEmployeesForm from '../../сomponent/form/employeesForm/PutEmployeesForm';
import { getEmployeeAccountData, putEmployeeAccountData } from '../../redux/employeesAccountData/actions';
import s from './EmployeesAccountData.module.scss';

const EmployeesAccountData = ({ id, putEmployeeAccountDataRequest, getEmployeeAccountData, loading, error, data, foto }) => {
    
    useEffect(() => { getEmployeeAccountData(id) },[getEmployeeAccountData, id]);
    const [showWindow, setShowWindow] = useState(false);
    const modificationEmployees = (object) => {//Изменение даных сотрудника 
        object.Foto = foto;//Передаем в своество обьекта.Фото = Фото-'Из Store'
        putEmployeeAccountDataRequest(object, id);
        setShowWindow(false); 
    }
    //if(loading){
    //    return 'Загрузка'
    //}

    //if(error){
    //    return 'Ошибка'
    //}

    return (
        <>
            <div className={s.accountBlock}>
                <div className={s.end}>
                    <h3>Основные данные</h3>
                    <Button variant="primary" onClick={ () => { setShowWindow(true) } }>Изменить</Button>
                </div>
                
                <hr/>
                <ul>
                    {data.fio.fio ? <li><span>ФИО: <b>{data.fio.fio}</b></span></li> : ''}
                    {data.login ? <li><span>Логин: <b>{data.login}</b></span></li> : ''}
                    {data.passwordHelp ? <li><span>Подсказка к паролю: <b>{data.passwordHelp}</b></span></li> : ''}
                    {data.password ? <li><span>Пароль: <b>{data.password}</b></span></li> : ''}
                    {data.phoneNumber ? <li><span>Номер телефона: <b>{data.phoneNumber}</b></span></li> : ''}
                    {data.email ? <li><span>Email: <b>{data.email}</b></span></li> : ''}
                    {data.personalNumber ? <li><span>Персональный номер: <b>{data.personalNumber}</b></span></li> : ''}
                    {data.certificateNumber ? <li><span>Номер сертификата: <b>{data.certificateNumber}</b></span></li> : ''}
                    {data.passport.birthDate ? <li><span>Дата рождения: <b>{data.passport.birthDate}</b></span></li> : ''}
                    {data.passport.birthPlace ? <li><span>Место рождения: <b>{data.passport.birthPlace}</b></span></li> : ''}
                    {data.passport.serial ? <li><span>Серия: <b>{data.passport.serial}</b></span></li> : ''}
                    {data.passport.number ? <li><span>Номер: <b>{data.passport.number}</b></span></li> : ''}
                    {data.passport.issueDate ? <li><span>Дата выдачи паспорта: <b>{data.passport.issueDate}</b></span></li> : ''}
                    {data.passport.issuePlace ? <li><span>Место выдачи паспорта: <b>{data.passport.issuePlace}</b></span></li> : ''}
                    {data.passport.code ? <li><span>Код подразделения: <b>{data.passport.code}</b></span></li> : ''}
                    {data.snils ? <li><span>Снилс: <b>{data.snils}</b></span></li> : ''}
                    {data.inn ? <li><span>Инн: <b>{data.inn}</b></span></li> : ''}
                    {data.officeName ? <li><span>Наименования офиса: <b>{data.officeName}</b></span></li> : ''}
                    {data.jobPositionName ? <li><span>Должность: <b>{data.jobPositionName}</b></span></li> : ''}
                    {data.statusName ? <li><span>Статус: <b>{data.statusName}</b></span></li> : ''}
                </ul> 
            </div>

            <ModalWindow 
            size='xl'
            show={showWindow}
            title='Изменение должности'
            onClose={ () => setShowWindow(false) }
            body={
                    <PutEmployeesForm object={data} onClose={ () => setShowWindow(false) } 
                    onSubmit={ (formData) => { modificationEmployees(formData) } }/>
                }
            />

        </>
    )
}

const mapStateToProps = (state) => ({ 
    loading: state.employeesAccountData.loading,
    error: state.employeesAccountData.error,
    data: state.employeesAccountData.data, 
    foto: state.fotoFile.file,
})  
    
const mapDispatchToProps = { 
    getEmployeeAccountData,
    putEmployeeAccountData,
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesAccountData);
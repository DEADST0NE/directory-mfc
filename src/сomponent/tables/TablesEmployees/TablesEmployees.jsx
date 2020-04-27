import React from 'react';
//import { useState } from 'react';
//import {connect} from 'react-redux'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPlay, faPause, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

//import ModalWindow from '../../../сomponent/ModalWindow';
import StatusImg from '../../../img/StatusImg';
//import PutEmployeesForm from '../../form/employeesForm/PutEmployeesForm';
//import { putEmployee, getEmployee } from '../../../redux/employee/actions';
import s from '../GlobalTables.module.scss';

const TablesEmployees = ({ object, loading, error, putEmployee, getEmployee, foto }) => {

    //const [showModalPutEmployee, setShowModalPutEmployee] = useState(false);//Индикатор отображения модального окна
    //const [putIdEmployee, setputIdEmployee] = useState(null);//id сотрудника

    //const modificationEmployees = (object) => {//Изменение даных сотрудника 
    //    object.Foto = foto;//Передаем в своество обьекта.Фото = Фото-'Из Store'
    //    putEmployee(object, putIdEmployee);
    //    setShowModalPutEmployee(false); 
    //}

    //const openModalPutEmployees = (id) => {//Открывает модальное окно изменения должности 
    //    getEmployee(id);
    //    setputIdEmployee(id);
    //    setShowModalPutEmployee(true);
    //} 
    return (
        <>
            <table className={s.tableEmployees}> 
                <thead>
                    <tr>
                        <td>Филиалы <FontAwesomeIcon icon={ faFilter } /></td>
                        <td>Сотрудники <FontAwesomeIcon icon={ faFilter } /></td> 
                        <td>Дожности <FontAwesomeIcon icon={ faFilter } /></td>
                        <td>Статус</td> 
                        <td>Активность</td>
                        <td>Действия</td>
                    </tr>
                </thead> 
                <tbody>
                    {
                        object.map( (item, index) => (
                            <tr key={index}> 
                                <td>{item.officeName}</td>
                                <td>{item.employeeName}</td>
                                <td>{item.employeeJobPositionName}</td>
                                <td><StatusImg id={ item.employeeStatusId } /></td>
                                <td>{ item.employeeIsActiv ? <FontAwesomeIcon icon={ faPlay } color='green'/> 
                                                            : <FontAwesomeIcon icon={ faPause } color='red'/> }</td>
                                <td>
                                    <Link  to={{
                                        pathname: '/EmployeesAccount',
                                        state: { id: item.employeeId }
                                    }}> 
                                        <FontAwesomeIcon icon={ faEye } /> 
                                    </Link> 
                                    <FontAwesomeIcon icon={ faTrash } />
                                </td> 
                            </tr>  
                        ))
                    }
                </tbody>
            </table>
            
        </>
    )
}
//onClick={ ()=>{ openModalPutEmployees(item.employeeId) } }
//<ModalWindow 
//    size='xl'
//    show={showModalPutEmployee}
//    title='Изменение данных сотрудника'
//    onClose={ () => setShowModalPutEmployee(false) }
//    body={
//            <PutEmployeesForm loadingStatus={false} errorStatus={false} onClose={ () => setShowModalPutEmployee(false) } 
//            onSubmit={ (formData) => modificationEmployees(formData) }/>
//    }
///>
//const mapStateToProps = (state) => ({ 
//    loading: state.employee.loading,
//    error: state.employee.error,
//    foto: state.fotoFile.file,
//})  
    
//const mapDispatchToProps = { 
//    getEmployee,
//    putEmployee,
//}

//export default connect(mapStateToProps, mapDispatchToProps)(TablesEmployees);
export default TablesEmployees;
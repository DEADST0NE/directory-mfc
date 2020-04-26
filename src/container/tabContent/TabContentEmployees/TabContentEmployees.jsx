import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'; 
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

//import Spiner from '../../../сomponent/Spiner';
//import Error from '../../../сomponent/Error';
import ModalWindow from '../../../сomponent/ModalWindow';
import { getEmployees } from '../../../redux/employeeS/actions'; 
import { postEmployee } from '../../../redux/employee/actions'
import {searchItem, changeSetSearchText} from '../../../utils/search';
import TablesEmployees from '../../../сomponent/tables/TablesEmployees';
import PostEmployeesForm from '../../../сomponent/form/employeesForm/PostEmployeesForm';
import s from '../GlobalTab.module.scss';

const TabContentEmployees = ({getEmployees, loading, error, employees, postEmployee, foto}) => {

    const [showModalPostEmployee, setShowModalPostEmployee] = useState(false);
    const [searchText, setSearchText] = useState(null); //Текст поиска
    const [search, setSearch] = useState([]); //Массив обьектов удов совпад
    const [searchOn, setSearchOn] = useState(false); //Показать контент поиска
    useEffect(() => { getEmployees() },[getEmployees]);

    let testData = [
        {
            "employeeId": 22,
            "officeName": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Кировский район)",
            "employeeName": "Тестов Тест Тестович",
            "employeeJobPositionName": "Оператор",
            "employeeStatusId": 2,
            "employeeStatusName": "Работает",
            "employeeIsActiv": true
        },
        {
            "employeeId": 23,
            "officeName": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Кировский район)",
            "employeeName": "Керимгаджиев Абдулмукмин Абдулмуслимович",
            "employeeJobPositionName": "Оператор",
            "employeeStatusId": 4,
            "employeeStatusName": "Уволен",
            "employeeIsActiv": true
        },
        {
            "employeeId": 26,
            "officeName": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Советский район)",
            "employeeName": "Тунгатаров Вазирхан Климбекович",
            "employeeJobPositionName": "Курьер",
            "employeeStatusId": 3,
            "employeeStatusName": "Отключен",
            "employeeIsActiv": false
        }
    ];

    const addEmployees = (object) => {//Добавляем сотрудника
        object.Foto = foto;//Передаем в своество обьекта.Фото = Фото-'Из Store' 
        postEmployee(object);
        setShowModalPostEmployee(false); 
    }

    //if(loading){
    //    return <Spiner />
    //}
    //else(error){
    //    return <Error />
    //}

    return ( 
        <>
            <div className={s.searchBLeft}>
                <InputGroup  className={s.inputGroup}>
                    <FormControl placeholder="Строка поиска" onChange={ (event)=>{ changeSetSearchText(event, setSearchText, setSearchOn, setSearch) } }/>
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={ ()=>{ searchItem(searchText, testData, setSearch); setSearchOn(true) } }>Поиск</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Button variant="primary" onClick={ ()=>setShowModalPostEmployee(true) }>Добавить</Button> 
            </div>  
    
            { 
                searchOn ? 
                    search.length ? <TablesEmployees object={search} /> : 'Не нйден' 
                : <TablesEmployees object={testData} />
            }
            
            <ModalWindow 
                size='xl'
                show={showModalPostEmployee}
                title='Добавление сотрудника'
                onClose={ () => setShowModalPostEmployee(false) }
                body={
                        <PostEmployeesForm  onClose={ () => setShowModalPostEmployee(false) } 
                        onSubmit={ (formData) => addEmployees(formData) }/>
                    }
            />
        </>
        )
}

const mapStateToProps = (state) => ({ 
    loading: state.employeeS.loading,
    error: state.employeeS.error,
    employees: state.employeeS.data,
    foto: state.fotoFile.file,
})  
    
const mapDispatchToProps = { 
    getEmployees,
    postEmployee,
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContentEmployees); 
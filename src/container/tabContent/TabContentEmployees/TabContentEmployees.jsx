import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'; 
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

//import Spiner from '../../../сomponent/Spiner';
//import Error from '../../../сomponent/Error';
import ModalWindow from '../../../сomponent/ModalWindow';
import { getEmployees, postEmployee } from '../../../redux/employees/actions';  
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
        "employeeId": "f01c225d-8187-4dea-acc8-057a05809735",
        "officeName": "Махачкала",
        "employeeName": "Магомедов Магомед Магомедович",
        "employeeJobPositionName": "Специалист",
        "employeeStatusId": 2,
        "employeeStatusName": "Работает",
        "employeeIsActiv": true
    },
    {
        "employeeId": "3ed47bae-5fa8-42ee-9655-f97217ea62eb",
        "officeName": "Махачкала",
        "employeeName": "Мурадов Мурад Мурадович",
        "employeeJobPositionName": "Специалист",
        "employeeStatusId": 2,
        "employeeStatusName": "Работает",
        "employeeIsActiv": true
    },
    {
        "employeeId": "a4e80330-538f-4185-8855-46e4631e95b7",
        "officeName": "Махачкала",
        "employeeName": "Арсланов Арслан Арсланович",
        "employeeJobPositionName": "Специалист",
        "employeeStatusId": 2,
        "employeeStatusName": "Работает",
        "employeeIsActiv": true
    },
    {
        "employeeId": "657b7431-9361-47b4-b9ee-95fc53bf0ad3",
        "officeName": "Махачкала",
        "employeeName": "Максимов Максим Максимович",
        "employeeJobPositionName": "Курьер",
        "employeeStatusId": 2,
        "employeeStatusName": "Работает",
        "employeeIsActiv": true
    },
    {
        "employeeId": "a42262f4-b447-4c88-928d-023108e0f724",
        "officeName": "Махачкала",
        "employeeName": "Денисов Денис Денисович",
        "employeeJobPositionName": "Курьер",
        "employeeStatusId": 2,
        "employeeStatusName": "Работает",
        "employeeIsActiv": true
    },
    {
        "employeeId": "d93002c3-8010-45cb-81c4-7d6bdf72c352",
        "officeName": "Махачкала",
        "employeeName": "Кадыров Кадыр Кадырович",
        "employeeJobPositionName": "Курьер",
        "employeeStatusId": 2,
        "employeeStatusName": "Работает",
        "employeeIsActiv": true
    },
    {
        "employeeId": "71686c1f-433a-43b4-843c-5d67c09fe9a5",
        "officeName": "Махачкала",
        "employeeName": "Магомедова Заира Магомедовна",
        "employeeJobPositionName": "Администратор",
        "employeeStatusId": 2,
        "employeeStatusName": "Работает",
        "employeeIsActiv": true
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
    loading: state.employees.loading,
    error: state.employees.error,
    employees: state.employees.data,
    foto: state.fotoFile.file,
})  
    
const mapDispatchToProps = { 
    getEmployees,
    postEmployee,
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContentEmployees); 
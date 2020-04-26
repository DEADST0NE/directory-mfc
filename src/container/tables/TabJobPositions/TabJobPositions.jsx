import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux'; 
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

//import Spiner from '../../../сomponent/Spiner';
//import Error from '../../../сomponent/Error'; 
import ModalWindow from '../../../сomponent/ModalWindow';
import { getJobPosition, postAddJobPosition, putAddJobPosition } from '../../../redux/jobPosition/actions'; 
import PostJobPositionsForm from '../../../сomponent/form/jobPositionsForm/PostJobPositionsForm';
import PutJobPositionsForm from '../../../сomponent/form/jobPositionsForm/PutJobPositionsForm';
import s from '../GlobalTables.module.scss'; 

const TabJobPositions = ({ getJobPosition, jobPosition, loading, error, postAddJobPosition, putAddJobPosition}) => {

    const [showModalPostJobPositions, setShowModalPostJobPositions] = useState(false);
    const [showModalPutJobPositions, setShowModalPutJobPositions] = useState(false);  
    const [putIdJobPositions, setPutIdJobPositions] = useState(null);
    useEffect(() => { getJobPosition() },[getJobPosition]);

const testData = [
    {
        "id": 1,
        "name": "Оператор",
        "comment": null
    },
    {
        "id": 2,
        "name": "Курьер",
        "comment": null
    },
    {
        "id": 7,
        "name": "Редактирование должности",
        "comment": "Редактирование комментария к новой тестовой должности"
    }
]
    
    const addJobPosition = (object) => {//Добавление должности
        if( !object.nativeEvent ) {
            postAddJobPosition(object);
            setShowModalPostJobPositions(false);
        }
    }

    const modificationJobPosition = (object) => {//Изменение должности
        if( !object.nativeEvent ) {
            putAddJobPosition(putIdJobPositions, object);
            setShowModalPutJobPositions(false);
        }
    }

    const openModalPutJobPositions = (id) => {//Открывает модальное окно изменения должности 
        setPutIdJobPositions(id);
        setShowModalPutJobPositions(true);
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
                <FormControl placeholder="Строка поиска" aria-label="Строка поиска" aria-describedby="basic-addon2" />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Поиск</Button>
                </InputGroup.Append>
            </InputGroup>
            <Button variant="primary" onClick={ ()=>setShowModalPostJobPositions(true) }>Добавить</Button> 
        </div>  
        <table className={s.tableEmployees}> 
            <thead>
                <tr>
                    <td>Наименование</td>
                    <td>Кто добавил</td> 
                    <td>Когда добавили</td>
                    <td>Действия</td>
                </tr>
            </thead> 
            <tbody>
                {
                    testData.map( (item, index) => (
                        <tr key={index}> 
                            <td>{item.name}</td>
                            <td>{item.smallName}</td>
                            <td>Нужно уточнить</td>  
                            <td>
                                <FontAwesomeIcon onClick={ () => openModalPutJobPositions(item.id) } icon={ faPencilAlt } /> 
                                <FontAwesomeIcon icon={ faTrash } />
                            </td> 
                        </tr>  
                    ))
                }
                
            </tbody>
        </table> 

        <ModalWindow 
            show={showModalPostJobPositions}
            title='Добавление должности'
            onClose={ () => setShowModalPostJobPositions(false) }
            body={
                    <PostJobPositionsForm  onClose={ () => setShowModalPostJobPositions(false) } 
                    onSubmit={ (formData) => addJobPosition(formData) }/>
                }
        />

        <ModalWindow 
            show={showModalPutJobPositions}
            title='Изменение должности'
            onClose={ () => setShowModalPutJobPositions(false) }
            body={
                    <PutJobPositionsForm  onClose={ () => setShowModalPutJobPositions(false) } 
                    onSubmit={ (formData) => modificationJobPosition(formData) }/>
                }
        />
    </>
    )
}

const mapStateToProps = (state) => ({ 
    loading: state.jobPosition.loading,
    error: state.jobPosition.error,
    jobPosition: state.jobPosition.data
})  
    
const mapDispatchToProps = { 
    getJobPosition,
    postAddJobPosition,
    putAddJobPosition,
}

export default connect(mapStateToProps, mapDispatchToProps)(TabJobPositions);

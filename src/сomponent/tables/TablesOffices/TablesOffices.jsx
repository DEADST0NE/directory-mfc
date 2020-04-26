import React, {useState} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux'; 

import { getModificationOffices } from '../../../redux/offices/actions';
import ModalWindow from '../../../сomponent/ModalWindow'; 
import OfficesForm from '../../../сomponent/form/OfficesForm';
import s from '../GlobalTables.module.scss';

const TablesOffices = ({mass, putOffices, getModificationOffices}) => { 
    const [ showModalPutOffices, setShowModalPutOffices ] = useState(false);//Индикатор отображения модального окна
    const [ filtOfficesSort, setFiltOfficesSort] = useState(false);//Сортировка филиала по возрастанию или убыванию
    const [ filtAddresSort, setFiltAddresSort] = useState(false);//Сортировка адреса по возрастанию или убыванию
    const [ putIdOffices, setPutIdOffices ] = useState(null);//id филиала  

    const filter = (mass, bool, setBool, boolType) =>{//сортировка по возростанию или убыванию
        setBool(!bool); 
        mass.sort((a, b) => {
            let nameA = boolType ? a.name.toLowerCase() : a.setFiltOfficesSort.toLowerCase();
            let nameB = boolType ? b.name.toLowerCase() : b.setFiltOfficesSort.toLowerCase();
            if (nameA < nameB) 
                return bool ? 1 : -1
            else 
                return bool ? -1 : 1
        })
    }

    const modificationOffices = (object) => {//Изменение должности  
        putOffices(putIdOffices, object);
        setShowModalPutOffices(false);  
    }

    const openModalOffices = (object) => {//Открывает модальное окно изменения должности 
        getModificationOffices(object);
        setPutIdOffices(object.id);
        setShowModalPutOffices(true);
    }


    return(
        <>
        <table className={s.tableEmployees}> 
            <thead>
                <tr>
                    <td>Мнемоника</td>
                    <td>Филиал <FontAwesomeIcon onClick={ ()=>{ filter(mass, filtOfficesSort, setFiltOfficesSort, true) } } icon={ faFilter } /></td> 
                    <td>Адрес <FontAwesomeIcon onClick={ ()=>{ filter(mass, filtAddresSort, setFiltAddresSort, false) } } icon={ faFilter } /></td>
                    <td>Действия</td>
                </tr>
            </thead> 
            <tbody>
                {
                    mass.map( (item, index) => (
                        <tr key={index}> 
                            <td>{item.mnemo}</td>
                            <td>{item.smallName}</td>
                            <td>{item.CallCenterServer}</td>  
                            <td>
                                <FontAwesomeIcon onClick={ () => openModalOffices(item) } icon={ faEye } /> 
                                <FontAwesomeIcon icon={ faTrash } />
                            </td> 
                        </tr>  
                    ))
                }
                
            </tbody>
        </table>

        <ModalWindow 
            size='xl'
            show={showModalPutOffices}
            title='Изменение даных филиала'
            onClose={ () => setShowModalPutOffices(false) }
            body={
                    <OfficesForm onClose={ () => setShowModalPutOffices(false) } 
                    onSubmit={ (formData) => modificationOffices(formData) }/>
                }
        />

        </>
    )
}


const mapDispatchToProps = { 
    getModificationOffices
}

export default connect(()=>{return {}}, mapDispatchToProps)(TablesOffices); 
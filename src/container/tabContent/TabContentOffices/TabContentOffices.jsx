import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'; 
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import OfficesForm from '../../../сomponent/form/OfficesForm';
import ModalWindow from '../../../сomponent/ModalWindow'; 
import TablesOffices from '../../../сomponent/tables/TablesOffices';
import {getOffices, putOffices, postOffices, getModificationOffices} from '../../../redux/offices/actions';
import {searchItem, changeSetSearchText} from '../../../utils/search';
import s from '../GlobalTab.module.scss';

const TabContentOffices = ({ getOffices, offices, loading, error, putOffices, postOffices, getModificationOffices }) => {

    const testData = [
        {
            "id": 1,
            "name": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Кировский район)",
            "smallName": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Кировский район)",
            "number": null,
            "mnemo": "MAHK",
            "phoneNumber": null,
            "schedule": null,
            "website": null,
            "skype": null,
            "email": null,
            "emailLogin": null,
            "emailPassword": null,
            "emailServer": null,
            "emailPort": null,
            "callCenterServer": null,
            "quantityWindows": null,
            "isHeadOperatorHall": null,
            "inn": null,
            "ogrn": null,
            "oktmo": null,
            "okato": null,
            "kpp": null,
            "vendorId": null,
            "esiaCenttId": null,
            "mdmUid": null,
            "convenience": null,
            "cikId": null,
            "officeCikName": null,
            "minTrudRequestNumber": 13543,
            "esiaOperatorSnils": null,
            "geographicCoordination": null,
            "isStructuralSubdivision": false,
            "tosp": null,
            "countPopulation": null
        },
        {
            "id": 2,
            "name": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Советский район)",
            "smallName": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Советский район)",
            "number": null,
            "mnemo": "MHSO",
            "phoneNumber": null,
            "schedule": null,
            "website": null,
            "skype": null,
            "email": null,
            "emailLogin": null,
            "emailPassword": null,
            "emailServer": null,
            "emailPort": null,
            "callCenterServer": null,
            "quantityWindows": null,
            "isHeadOperatorHall": null,
            "inn": null,
            "ogrn": null,
            "oktmo": null,
            "okato": null,
            "kpp": null,
            "vendorId": null,
            "esiaCenttId": null,
            "mdmUid": null,
            "convenience": null,
            "cikId": null,
            "officeCikName": null,
            "minTrudRequestNumber": 30150,
            "esiaOperatorSnils": null,
            "geographicCoordination": null,
            "isStructuralSubdivision": false,
            "tosp": null,
            "countPopulation": null
        },
        {
            "id": 3,
            "name": "Новое наименование филиала",
            "smallName": "Новое краткое наименование филиала",
            "number": null,
            "mnemo": "Нмнемоника",
            "phoneNumber": null,
            "schedule": null,
            "website": null,
            "skype": null,
            "email": null,
            "emailLogin": null,
            "emailPassword": null,
            "emailServer": null,
            "emailPort": null,
            "callCenterServer": null,
            "quantityWindows": null,
            "isHeadOperatorHall": null,
            "inn": null,
            "ogrn": null,
            "oktmo": null,
            "okato": null,
            "kpp": null,
            "vendorId": null,
            "esiaCenttId": null,
            "mdmUid": null,
            "convenience": null,
            "cikId": null,
            "officeCikName": null,
            "minTrudRequestNumber": 0,
            "esiaOperatorSnils": null,
            "geographicCoordination": null,
            "isStructuralSubdivision": null,
            "tosp": null,
            "countPopulation": null
        }
    ]
    useEffect(() => { getOffices() },[getOffices]); 
    const [searchText, setSearchText] = useState(null); //Текст поиска
    const [search, setSearch] = useState([]); //Массив обьектов удов совпад
    const [searchOn, setSearchOn] = useState(false); //Показать контент поиска
    const [ showModalPostOffices, setShowModalPostOffices ] = useState(false);//Индикатор отображения модального окна

    const modalPostOffices = (formData) => {//onSubmit
        setShowModalPostOffices(false);
        postOffices(formData);
    }

    const showModal = () =>{
        setShowModalPostOffices(true); 
        getModificationOffices({});
    } 

    //if(loading){
    //    return <Spiner />
    //}
    //else(error){
    //    return <Error />
    //}

    return(
        <>
        <div className={s.searchBLeft}>
            <InputGroup  className={s.inputGroup}>
                <FormControl placeholder="Строка поиска" onChange={ (event)=>{ changeSetSearchText(event, setSearchText, setSearchOn, setSearch) } }/>
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={ ()=>{ searchItem(searchText, testData, setSearch); setSearchOn(true) } }>Поиск</Button>
                </InputGroup.Append>
            </InputGroup>
            <Button variant="primary" onClick={ ()=>{ showModal() } }>Добавить</Button> 
        </div>  

        { 
            searchOn ? 
                search.length ? <TablesOffices mass={search} putOffices={putOffices}/> : 'Не нйден' 
            : <TablesOffices mass={testData} putOffices={putOffices}/>
        }

        <ModalWindow 
            size='xl'
            show={showModalPostOffices}
            title='Добавление филиала'
            onClose={ () => setShowModalPostOffices(false) }
            body={
                    <OfficesForm onClose={ () => setShowModalPostOffices(false) } 
                    onSubmit={ (formData) => modalPostOffices(formData) }/>
                }
        />

        </>
    )
}


const mapStateToProps = (state) => ({ 
    loading: state.offices.data,
    error: state.offices.error,
    offices: state.offices.data
})  
    
const mapDispatchToProps = { 
    getOffices, 
    putOffices,
    postOffices,
    getModificationOffices,
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContentOffices);
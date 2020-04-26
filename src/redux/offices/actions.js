import axios from '../../api';

import {
    OFFICES_REQUEST,
    OFFICES_SUCCESS,
    OFFICES_ERROR,
    OFFICES_DATA_MODIFICATION
} from '../constActions';

const getOfficesRequested = () => ({
    type: OFFICES_REQUEST
});
const getOfficesSuccess = (item) => ({
    type: OFFICES_SUCCESS,
    payload: item
});
const getOfficesError = (error) => ({
    type: OFFICES_ERROR,
    payload: error
});

export const getModificationOffices = (object) => ({//данные по умолчанию для формы редоктирования филиала
    type: OFFICES_DATA_MODIFICATION,
    payload: object
});

//Запрос на добавление филиала
const getOfficesRequest = async () => {
    return await axios.get(`Offices`)
    .then(response => response.data);
};
export const getOffices = () => (dispatch) => {
    dispatch(getOfficesRequested());
    getOfficesRequest()
        .then((data) => dispatch(getOfficesSuccess(data)))
        .catch((err) => dispatch(getOfficesError(err)));
};
//--

//Запрос на добавление филиала
const postOfficesRequest = async ( object ) => {
    return await axios.post(`Offices`, object) 
};

export const postOffices = ( object ) => ( dispatch ) => { 
    postOfficesRequest(object);
    dispatch(getOffices());
};
//--

//Запрос на изменение филиала
const putOfficesRequest = async ( id, object ) => {
    return await axios.put(`Offices/${id}`, object) 
};

export const putOffices = ( id, object ) => ( dispatch ) => { 
    putOfficesRequest(id, object);
    dispatch(getOffices());
};
//--
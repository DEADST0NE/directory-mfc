import axios from '../../api';

import {
    JOB_POSITION_REQUEST,
    JOB_POSITION_SUCCESS,
    JOB_POSITION_ERROR
} from '../constActions';

const getJobPositionRequested = () => ({
    type: JOB_POSITION_REQUEST
});
const getJobPositionSuccess = (item) => ({
    type: JOB_POSITION_SUCCESS,
    payload: item
});
const getJobPositionError = (error) => ({
    type: JOB_POSITION_ERROR,
    payload: error
});

//Запрос все должности
const getJobPositionRequest = async () => {
    return await axios.get(`jobPosition`)
    .then(response => response.data);
};
export const getJobPosition = () => (dispatch) => {
    dispatch(getJobPositionRequested());
    getJobPositionRequest()
        .then((data) => dispatch(getJobPositionSuccess(data)))
        .catch((err) => dispatch(getJobPositionError(err)));
};
//--

//Запрос на добавление должности 
const postJobPositionRequest = async (object) => {
    return await axios.post(`jobPosition`, object) 
};

export const postJobPosition = (object) => (dispatch) => {
    postJobPositionRequest(object);
    dispatch(getJobPosition());
};
//--

//Запрос на изменение должности
const putJobPositionRequest = async ( id, object ) => {
    return await axios.put(`jobPosition/${id}`, object) 
};

export const putJobPosition = ( id, object ) => ( dispatch ) => { 
    putJobPositionRequest(id, object);
    dispatch(getJobPosition());
};
//--
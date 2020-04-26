import axios from '../../api';

import {
    EMPLOYEES_REQUEST,
    EMPLOYEES_SUCCESS,
    EMPLOYEES_ERROR
} from '../constActions';

const getEmployeesRequested = () => ({
    type: EMPLOYEES_REQUEST
});
const getEmployeesSuccess = (item) => ({
    type: EMPLOYEES_SUCCESS,
    payload: item
});
const getEmployeesError = (error) => ({
    type: EMPLOYEES_ERROR,
    payload: error
});

//Запрос всех сотрудников
const getEmployeesRequest = async () => {
    return await axios.get(`Employees`)
    .then(response => response.data);
};
export const getEmployees = () => (dispatch) => {
    dispatch(getEmployeesRequested());
    getEmployeesRequest()
        .then((data) => dispatch(getEmployeesSuccess(data)))
        .catch((err) => dispatch(getEmployeesError(err)));
};
//--


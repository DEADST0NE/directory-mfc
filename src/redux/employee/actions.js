import axios from '../../api';
import {
    EMPLOYEE_REQUEST,
    EMPLOYEE_SUCCESS,
    EMPLOYEE_ERROR
} from '../constActions';
import getEmployees from '../employeeS/reduser';

const getEmployeeRequested = () => ({
    type: EMPLOYEE_REQUEST
});
const getEmployeeSuccess = (item) => ({
    type: EMPLOYEE_SUCCESS,
    payload: item
});
const getEmployeeError = (error) => ({
    type: EMPLOYEE_ERROR,
    payload: error
});

//Запрос данных о сотруднике 
const getEmployeeRequest = async (id) => {
    return await axios.get(`Employees/${id}`)
    .then(response => response.data);
};
export const getEmployee = (id) => (dispatch) => {
    dispatch(getEmployeeRequested());
    getEmployeeRequest(id)
        .then((data) => dispatch(getEmployeeSuccess(data)))
        .catch((err) => dispatch(getEmployeeError(err)));
};
//--

//Запрос на добавление сотрудника
const postEmployeesRequest = async (object) => {
    return await axios.post(`Employees`, object) 
};

export const postEmployee = (object) => (dispatch) => {
    postEmployeesRequest(object);
    dispatch(getEmployees());
};
//--

//Запрос на изменение даных сотрудника
const putEmployeesRequest = async (object, id) => {
    return await axios.post(`Employees/${id}`, object) 
};

export const putEmployee = (object, id) => (dispatch) => {
    putEmployeesRequest(object, id);
    dispatch(getEmployees());
};
//--
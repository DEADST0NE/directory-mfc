import axios from '../../api';

import {
    JOB_SALARIES_REQUEST,
    JOB_SALARIES_SUCCESS,
    JOB_SALARIES_ERROR
} from '../constActions';

const getJobSalariesRequested = () => ({
    type: JOB_SALARIES_REQUEST
});
const getJobSalariesSuccess = (item) => ({
    type: JOB_SALARIES_SUCCESS,
    payload: item
});
const getJobSalariesError = (error) => ({
    type: JOB_SALARIES_ERROR,
    payload: error
});

//Запрос все оклады
const getJobSalariesRequest = async () => {
    return await axios.get(`JobSalaries`)
    .then(response => response.data);
};

export const getJobSalaries = () => (dispatch) => {
    dispatch(getJobSalariesRequested());
    getJobSalariesRequest()
        .then((data) => dispatch(getJobSalariesSuccess(data)))
        .catch((err) => dispatch(getJobSalariesError(err)));
};
//--

//Запрос на добавление оклада 
const postAddJobSalariesRequest = async (object) => {
    return await axios.post(`JobSalaries`, object) 
};

export const postAddJobSalaries = (object) => (dispatch) => {
    postAddJobSalariesRequest(object);
    dispatch(getJobSalaries());
};
//--

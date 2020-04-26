import {
    EMPLOYEE_REQUEST,
    EMPLOYEE_SUCCESS,
    EMPLOYEE_ERROR
} from '../constActions';

const initialState = {
    data: null,
    loading: true,
    error: false
} 
const reducerEmployee = (state = initialState, action) => {
    switch(action.type){
        case EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case EMPLOYEE_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            } 
        case EMPLOYEE_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerEmployee;


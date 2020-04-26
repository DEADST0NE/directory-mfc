import {
    EMPLOYEES_REQUEST,
    EMPLOYEES_SUCCESS,
    EMPLOYEES_ERROR
} from '../constActions';

const initialState = {
    data: null,
    loading: true,
    error: false
} 
const reducerEmployees = (state = initialState, action) => {
    switch(action.type){
        case EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case EMPLOYEES_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }

        case EMPLOYEES_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerEmployees;


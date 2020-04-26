import {
    JOB_SALARIES_REQUEST,
    JOB_SALARIES_SUCCESS,
    JOB_SALARIES_ERROR
} from '../constActions';

const initialState = {
    data: null,
    loading: true,
    error: false
} 
const reducerJobSalaries = (state = initialState, action) => {
    switch(action.type){
        case JOB_SALARIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case JOB_SALARIES_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }

        case JOB_SALARIES_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerJobSalaries;


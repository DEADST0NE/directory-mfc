import {
    JOB_POSITION_REQUEST,
    JOB_POSITION_SUCCESS,
    JOB_POSITION_ERROR
} from '../constActions';

const initialState = {
    data: null,
    loading: true,
    error: false
} 
const reducerJobPosition = (state = initialState, action) => {
    switch(action.type){
        case JOB_POSITION_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case JOB_POSITION_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }

        case JOB_POSITION_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerJobPosition;


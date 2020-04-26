import {
    OFFICES_REQUEST,
    OFFICES_SUCCESS,
    OFFICES_ERROR,
    OFFICES_DATA_MODIFICATION
} from '../constActions';

const initialState = {
    data: null,
    modificationData: null,
    loading: true,
    error: false
} 
const reducerOffices = (state = initialState, action) => {
    switch(action.type){
        case OFFICES_DATA_MODIFICATION: 
            return {
                ...state,
                modificationData: action.payload,
            }
        case OFFICES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case OFFICES_SUCCESS: 
            return {
                ...state,
                offices: action.payload,
                loading: false,
                error: false
            }

        case OFFICES_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerOffices;


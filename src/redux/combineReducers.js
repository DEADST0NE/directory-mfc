import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import reducerJobPosition from './jobPosition/reduser';
import reducerJobSalaries from './jobSalaries/reduser'; 
import reducerOffices from './offices/reduser';
import reducerEmployees from './employeeS/reduser';
import reducerFileFoto from './file/reduser';
import reducerEmployee from './employee/reduser';

const rootReducers = combineReducers({ 
    jobPosition: reducerJobPosition,
    jobSalaries: reducerJobSalaries,
    offices: reducerOffices,
    employeeS: reducerEmployees,
    employee: reducerEmployee,
    fotoFile: reducerFileFoto,
    form: formReducer
});

export default rootReducers;
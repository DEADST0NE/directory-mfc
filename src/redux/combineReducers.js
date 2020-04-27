import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import reducerJobPosition from './jobPosition/reduser';
import reducerJobSalaries from './jobSalaries/reduser'; 
import reducerOffices from './offices/reduser';
import reducerEmployees from './employees/reduser';
import reducerFileFoto from './file/reduser'; 
import reducerEmployeeAccountData from './employeesAccountData/reduser';

const rootReducers = combineReducers({ 
    jobPosition: reducerJobPosition,
    jobSalaries: reducerJobSalaries,
    offices: reducerOffices,
    employees: reducerEmployees, 
    fotoFile: reducerFileFoto,
    employeesAccountData: reducerEmployeeAccountData,
    form: formReducer
});

export default rootReducers;
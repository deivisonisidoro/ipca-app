import { combineReducers } from 'redux';

import valuesReducer from './valuesReducer';
import utilsReducer from './utilsReducer';



const reducers = combineReducers({ 
    valuesReducer,
    utilsReducer,
})

export { reducers }
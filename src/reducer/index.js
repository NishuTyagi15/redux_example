import counterReducer from "./counterReducer";
import logReducer from "./isLogged";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    mycount: counterReducer,
    mylog: logReducer
})

export default allReducers
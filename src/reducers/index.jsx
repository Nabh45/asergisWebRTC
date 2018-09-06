import { combineReducers } from 'redux';
import ClassReducer from './reducer-class';

const allReducers = combineReducers({
    buttonClass: ClassReducer
})

export default allReducers;
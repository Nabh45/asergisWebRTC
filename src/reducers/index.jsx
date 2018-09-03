import { combineReducers } from 'redux';
import ClassReducer from './reducer-class';
import {changeButtonClass} from '../actions/index'

const allReducers = combineReducers({
    buttonClass : ClassReducer,
    changeButtonClass
})

export default allReducers;
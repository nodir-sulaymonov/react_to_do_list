import {combineReducers} from 'redux';
import addReducer from './add-poeple-reducer';
export default combineReducers({
    addList: addReducer
});
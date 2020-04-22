import {combineReducers} from 'redux';
import addPeople from './add-poeple-reducer';
import addProjects from './add-project-reducer'
export default combineReducers({
    addList: addPeople,
    contacts: addProjects
});
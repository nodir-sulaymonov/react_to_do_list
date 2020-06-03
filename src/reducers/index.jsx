import {combineReducers} from 'redux';
import addTasks from './add-task-reducer';
import addProjects from './add-project-reducer'
import signUpReducer from "./sign-up-reducer";
import signInReducer from "./sign-in-reducer";
export default combineReducers({
    tasksResult: addTasks,
    contacts: addProjects,
    signUpResult: signUpReducer,
    signInReducer: signInReducer
});
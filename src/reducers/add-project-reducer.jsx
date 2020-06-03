import * as actionTypes from '../actions/addProject';

export default (state = { projectList: [] }, action) => {
    switch (action.type){
        case actionTypes.PROJECT_LIST:
            return {
                ...state,
                projectList: action.payload
            };
        case actionTypes.PROJECT_LIST_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state;
    }
};
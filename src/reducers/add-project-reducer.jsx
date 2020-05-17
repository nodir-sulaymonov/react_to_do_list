import * as actionTypes from '../actions/addProject';

export default (state = { projectList: [] }, action) => {
    switch (action.type){
        case actionTypes.PROJECT_LIST:
            return {
                ...state,
                projectList: action.payload
            };
        default:
            return state;
    }
};
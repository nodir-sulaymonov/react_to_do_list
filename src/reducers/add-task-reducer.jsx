import * as actionTypes from '../actions/addTask';


const initialState = {
    taskList: []
};


const addReducer = (state = initialState, action)=>{
    switch (action.type){
        case actionTypes.ADD_TASK_SUCCESS:
            return {
                ...state,
                taskList: action.payload
            };
        case actionTypes.LIST_SORT_NAME:
            let sortedArray = [...state.taskList];
            sortedArray.sort((a, b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            });
            return {
                ...state,
                taskList: sortedArray
            };
        case actionTypes.LIST_SORT_PRIORITY:
            let sortedPriority = [...state.taskList];
            sortedPriority.sort((a, b) => {
                return a.priority - b.priority;
            });
            return {
                ...state,
                taskList: sortedPriority
            };
        case actionTypes.CREATE_TASK_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
};
export default addReducer;

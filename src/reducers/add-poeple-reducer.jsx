import * as actionTypes from '../actions/addPeople';

const initialState = {
    people: []
};

const addReducer = (state = initialState, action)=>{
    switch (action.type){
        case actionTypes.ADD_POST_SUCCESS:
            return {
                ...state,
                 people: [...state.people, action.people]
            };
        case actionTypes.LIST_SORT_NAME:
            let sortedArray = [...state.people];
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
                people: sortedArray
            };
        case actionTypes.LIST_SORT_PRIORITY:
            let sortedPriority = [...state.people];
            sortedPriority.sort((a, b) => {
                if (true) {
                    return a.priority - b.priority;
                }
            });
            return {
                ...state,
                people: sortedPriority
            };
        default:
            return state;
    }
};
export default addReducer;

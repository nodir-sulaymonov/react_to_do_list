
export const  ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const  LIST_SORT_NAME = 'LIST_SORT_NAME';
export const  LIST_SORT_PRIORITY= 'LIST_SORT_PRIORITY';


export const addPeopleSuccess = people => ({
    type: ADD_POST_SUCCESS,
    people: people
});
export const sortByName = () => ({
    type: LIST_SORT_NAME,
});
export const sortByPriority = () => ({
    type: LIST_SORT_PRIORITY,
});


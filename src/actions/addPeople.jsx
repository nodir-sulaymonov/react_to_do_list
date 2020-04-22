import axios from "axios";
import {apiUrl} from "../common/common";

export const  ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const  LIST_SORT_NAME = 'LIST_SORT_NAME';
export const  LIST_SORT_PRIORITY= 'LIST_SORT_PRIORITY';

export const createTask = (values, history) => {
    return dispatch => {
        axios.post(`${apiUrl}/tasks`, {
            name: values.name,
            description: values.description,
            projectId: values.id,
            priority: values.priority
        })
            .then(res => {
                dispatch(addPeopleSuccess(res.data));
                localStorage.setItem("token", res.data.token);
                history.push('/');
            })
            .catch(err => {
            });
    };
};


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


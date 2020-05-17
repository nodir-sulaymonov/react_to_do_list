import axios from "axios";
import {apiUrl} from "../common/common";

export const  ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const  LIST_SORT_NAME = 'LIST_SORT_NAME';
export const  LIST_SORT_PRIORITY= 'LIST_SORT_PRIORITY';

export const createTask = (payload) => {
    return dispatch => {
        console.log(payload)
        axios.post(`${apiUrl}api/projects/${payload.projectId}/tasks/`, {
            ...payload.task
        })
            .then(res => {

                dispatch(fetchTaskList(payload));
            })
            .catch(err => {
                console.log("error", err)
            });
    };
};

export const fetchTaskList = (payload) => {
    return dispatch => {
        axios
            .get(`${apiUrl}api/projects/${payload.projectId}/tasks/`)
            .then(res => {
                console.log("response: " + JSON.stringify(res));
                dispatch({
                    type: ADD_TASK_SUCCESS,
                    payload: res.data
                });
            })
            .catch(err => {
            });
    }
}

export const sortByName = () => ({
    type: LIST_SORT_NAME,
});
export const sortByPriority = () => ({
    type: LIST_SORT_PRIORITY,
});


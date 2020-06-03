import axios from "axios";
import {apiUrl} from "../common/common";
import {successNotifiy,failureNotify} from "./notifications/notifications";

export const PROJECT_LIST = 'PROJECT_LIST';
export const PROJECT_LIST_ERROR = 'PROJECT_LIST_ERROR';



export const createProject = (values) => {
    return dispatch => {
        const token = localStorage.token;
        axios.post(`${apiUrl}api/projects/`, {
            name: values.name,
        },)
            .then(res => {
                dispatch(fetchProjectList());
                successNotifiy('OK','You successfully registered.');
            })
            .catch(err => {
                dispatch(projectListError(err.message));
                failureNotify('ERROR',err.message)
            });
    };
};


export const fetchProjectList = () => {
    return dispatch => {
        axios.get(`${apiUrl}api/projects/`,)
            .then(res => {
                dispatch({
                    type: PROJECT_LIST,
                    payload: res.data
                });
                successNotifiy('OK','You successfully registered.');
            })
            .catch(err => {
                dispatch(projectListError(err.message));
                failureNotify('ERROR',err.message)
            });
    }
}
const projectListError = error => ({
    type: PROJECT_LIST_ERROR,
    payload: {
        error
    }
});

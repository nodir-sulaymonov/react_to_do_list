import axios from "axios";
import {apiUrl} from "../common/common";

export const PROJECT_LIST = 'PROJECT_LIST';



export const createProject = (values) => {
    return dispatch => {
        const token = localStorage.token;
        axios.post(`${apiUrl}api/projects/`, {
            name: values.name,
        },)
            .then(res => {
                dispatch(fetchProjectList())

            })
            .catch(err => {
            });
    };
};

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})

export const fetchProjectList = () => {
    return dispatch => {
        axios.get(`${apiUrl}api/projects/`,)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: PROJECT_LIST,
                    payload: res.data
                });
            })
            .catch(err => {
            });
    }
}

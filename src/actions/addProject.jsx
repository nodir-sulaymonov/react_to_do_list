import axios from "axios";
import {apiUrl} from "../common/common";
export const CREATE_NEW_CONTACT = 'CREATE_NEW_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export const createProject = (values, history) => {
    return dispatch => {
        axios.post(`${apiUrl}api/projects`, {
            name: values.name,
        })
            .then(res => {
                dispatch(createContact(res.data));
                localStorage.setItem("token", res.data.token);
                history.push('/');
            })
            .catch(err => {
            });
    };
};

export const deleteProject = (values, history) => {
    return dispatch => {
        axios.post(`${apiUrl}api/projects/id`, values)
            .then(res => {
                dispatch(deleteContact(res.data));
                localStorage.setItem("token", res.data.token);
                history.push('/');
            })
            .catch(err => {
            });
    };
};
export const createContact = (contact) => {
    return {
        type: CREATE_NEW_CONTACT,
        contact: contact
    }
};

export const deleteContact = (id) => {
    return {
        type: REMOVE_CONTACT,
        id: id
    }
};

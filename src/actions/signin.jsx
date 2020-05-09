import {apiUrl} from "../common/common";
import axios from 'axios';
import {failureNotify, successNotifiy} from "notifications/notifications";

export const SIGN_IN_STARTED = 'SIGN_IN_STARTED';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';


export const signIn = (values, history) => {
    return dispatch => {
        dispatch(signInStarter());
        axios.post(`${apiUrl}sign-in`, {
            username: values.mail,
            password: values.password,
        })
            .then(res => {
                dispatch(signInSuccess(res.data));
                successNotifiy('OK', 'You successfully login,please confirm your email.');
                localStorage.setItem("token", res.data.data.access_token);
                history.push('/');
            })
            .catch(err => {
                dispatch(signInError(err.message));
                failureNotify('ERROR', err.message);
            });
    };
};

const signInSuccess = users => ({
    type: SIGN_IN_SUCCESS,
    payload: {
        ...users
    }
});

const signInStarter = () => ({
    type: SIGN_IN_STARTED
});

const signInError = error => ({
    type: SIGN_IN_FAILURE,
    payload: {
        error
    }
});

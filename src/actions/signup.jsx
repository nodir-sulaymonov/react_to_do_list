import {apiUrl} from "../common/common";
import axios from 'axios';
import {successNotifiy,failureNotify} from "notifications/notifications";

export const SIGN_UP_STARTED = 'SIGN_UP_STARTED';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';



export const signUp = (values) =>{
    return dispatch => {
        dispatch(signUpStarter());
        axios.post(`${apiUrl}sign-up`, values)
            .then(res => {
                dispatch(signUpSuccess(res.data));
                successNotifiy('OK','You successfully registered,please confirm your email.')
            })
            .catch(err => {
                dispatch(signUpError(err.message));
                failureNotify('ERROR',err.message)
            });
    };
};

const signUpStarter = () => ({
    type: SIGN_UP_STARTED
});

const signUpSuccess = user => ({
    type: SIGN_UP_SUCCESS,
    payload: {
        ...user
    }
});

const signUpError = error => ({
    type: SIGN_UP_FAILURE,
    payload: {
        error
    }
});

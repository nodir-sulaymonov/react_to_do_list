import * as actionTypes from '../actions/signin';


const signInReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_STARTED:
            return {
                ...state,
                type: action.type
            };
        case actionTypes.LOGOUT_USER:
            return {...state}
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                data: action.payload.data
            };
        case actionTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default signInReducer;

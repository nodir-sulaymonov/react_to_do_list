import * as actionTypes from '../actions/signup';


const signUpReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SIGN_UP_STARTED:
            return {
                ...state,
                type:action.type
            };
        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                type:action.type,
                data:action.payload.data
            };
        case actionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error:action.payload.error
            };
        default:
            return state;
    }
};

export default signUpReducer;

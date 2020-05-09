import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxThunk from "redux-thunk";
const createStoreWithMiddleware = createStore(rootReducer, applyMiddleware(reduxThunk))

export default function configureStore() {
    return createStoreWithMiddleware;
}
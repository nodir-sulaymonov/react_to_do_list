import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxThunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware( reduxThunk)(createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default function configureStore() {
    return createStoreWithMiddleware;
}
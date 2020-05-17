import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxThunk from "redux-thunk";
const createStoreWithMiddleware = createStore(rootReducer, compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default function configureStore() {
    return createStoreWithMiddleware;
}
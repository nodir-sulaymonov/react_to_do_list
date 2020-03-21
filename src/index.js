import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import { Provider } from "react-redux";
import configureStore from '../src/store/ConfigureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>
    ,document.getElementById('root'));



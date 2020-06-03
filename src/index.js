import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PublicRoute from "./routes/route";
import {Provider} from "react-redux";
import configureStore from '../src/store/ConfigureStore';
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios';

const store = configureStore();
if(localStorage.token){
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.headers.common['token'] = `${localStorage.token}`;
}
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PublicRoute/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));



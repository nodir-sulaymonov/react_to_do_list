import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PublicRoute from "./routes/route";
import { Provider } from "react-redux";
import configureStore from '../src/store/ConfigureStore';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
           <PublicRoute/>
    </Provider>
    ,document.getElementById('root'));



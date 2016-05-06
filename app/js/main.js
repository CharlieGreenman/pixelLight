import "babel-polyfill";
// import FastClick from "fastclick";
// import fetch from 'isomorphic-fetch';
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./containers/App";
import configureStore from "./store/configureStore";

const store = configureStore();
require('../scss/core.scss');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("container_div")
);

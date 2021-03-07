import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//===============BOOTSTRAP==================
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/jquery/dist/jquery.slim.min";
import "../node_modules/popper.js/dist/umd/popper.min";
//===============SLICK-CAROUSEL==================
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SnackbarProvider } from 'notistack';
import './sass/main.scss';

import { Provider } from "react-redux";
import store from "./store";



ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById("root")
);





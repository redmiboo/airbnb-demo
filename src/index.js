import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import { ThemeProvider } from 'styled-components';

import App from './App';
import "normalize.css";
import "./assets/css/index.less";
import store from './store';
import theme from './assets/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback = {<h2>loading...</h2>}>
      <Provider store = {store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

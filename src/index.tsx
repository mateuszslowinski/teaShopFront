import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {store} from "./redux/store";
import { Provider } from 'react-redux';
import {GlobalStyles} from "./GlobalStyles";
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles/>
            <App/>
        </Provider>
    </React.StrictMode>
);


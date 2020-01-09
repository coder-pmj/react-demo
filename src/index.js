import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import myStore from './redux/store'
import IRouter from './router'
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <Provider store={myStore()}>
        <IRouter />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();

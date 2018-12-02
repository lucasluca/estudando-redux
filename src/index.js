import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import inputTextReducer from "./inputTextReducer";

// const reducers = combineReducers({
//     field: () => ({ value : 'Ola mundo primeira chave criada no redux'})
// })

const reducers = combineReducers({
    field: inputTextReducer
})

const store = createStore(reducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

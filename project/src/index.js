import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { saveState } from './components/redux/localstorage/'
import store from './components/redux/store'

store.subscribe(() => {
    saveState({
        // save your reducers on localstorage here, like:
        // salve seus reducers no localstorage aqui, tipo:
        
        // user: store.getState().user,
    })
})

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

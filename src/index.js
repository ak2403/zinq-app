import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './redux/reducers';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import './style/style.css';

const middleware = applyMiddleware(thunk);
const createdStore = createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={createdStore}>
        <App />
    </Provider>, document.getElementById('root'));

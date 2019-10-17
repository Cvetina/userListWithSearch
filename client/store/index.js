import Immutable from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from './reducers';

const middleware = applyMiddleware(promise, thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    serialize: {
        immutable: Immutable
    }
}) || compose;

export default createStore(reducers, composeEnhancers(middleware));
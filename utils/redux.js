import { routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';

export function getStore() {
	return createStore(
		combineReducers({
			...reducers,
			routing: routerReducer
		}),
		{},
		compose(
			applyMiddleware(thunkMiddleware),
			window.devToolsExtension ? window.devToolsExtension() : f => f
	));
}

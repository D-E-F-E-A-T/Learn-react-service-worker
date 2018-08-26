import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import 'tachyons';
import App from './containers/App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

//reducers
import reducers from './Reducers';

// middleware setup
const logger = createLogger();
const reduxMiddleware = applyMiddleware(logger, thunk);

//store
const store = createStore(reducers, reduxMiddleware);

const AppContainer = (
	<Provider store={store}>
		<App />
	</Provider>
);

render(AppContainer, document.getElementById('root'));
registerServiceWorker();

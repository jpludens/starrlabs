import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import App from './app.jsx';
import rootStub from './reducers/roots/rootStub.js';

import './../sass/main.scss';
const store = createStore(
  rootStub,
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);

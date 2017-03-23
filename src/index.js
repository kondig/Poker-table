import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { tableMaker, initialState } from './components/reducer';

let devtools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(tableMaker, initialState, devtools);

console.log('Initial state: ')
console.log(store.getState());
console.log('-----------');

ReactDOM.render(
    <Provider store={store}>
      <App      />
    </Provider>,
  document.getElementById('root')
);

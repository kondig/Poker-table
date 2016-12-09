import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';

import Provider from 'react-redux';
import createStore from 'redux';
import table from './components/reducer';

let store = createStore(table);

ReactDOM.render(
    <Provider store={store}>
      <App      />
    </Provider>,
  document.getElementById('root')
);

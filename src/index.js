import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { calcApp } from './reducers';
import App from './components/App';

const enhancer = process.env.NODE_ENV === 'production' 
  ? undefined 
  : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  calcApp,
  undefined,
  enhancer,
);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'),
);

registerServiceWorker();

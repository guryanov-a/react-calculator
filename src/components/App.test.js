import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { calcApp } from '../reducers';
import App from './App';

const store = createStore(calcApp);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

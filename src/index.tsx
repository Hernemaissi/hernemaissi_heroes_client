import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, Store as ReduxStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

import App from './App';
import reducers from './reducers';
import { Store } from './global';

const store: ReduxStore<Store.All> = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

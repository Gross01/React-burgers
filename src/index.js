import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import {Provider} from 'react-redux'
import {createStore} from './services/store'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const store = createStore()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);


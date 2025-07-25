import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import {Provider} from 'react-redux'
import {store} from './services/store'
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root')!
);

root.render(
  <React.StrictMode>
      <HashRouter basename='/'>
        <Provider store={store}>
                <App/>
        </Provider>
      </HashRouter>
  </React.StrictMode>
);


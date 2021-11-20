import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/es/integration/react';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      {/* <PersistGate loading={null} persistor={}> */}
      <BrowserRouter>
        <Switch>
          <App />
        </Switch>
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

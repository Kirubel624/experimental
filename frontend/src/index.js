import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ContextProvider} from './context/Context'
import {Provider} from 'react-redux'
import {store, persistor} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>,
  </React.StrictMode>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



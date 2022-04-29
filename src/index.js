import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Navbar';
import store from './store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  
        <PersistGate loading={null} persistor={persistor}>
         <Navbar/>
        <App/>
        </PersistGate>
    </Provider>
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; 

/**
 * Entry point of the React application.
 *
 * This script initializes the root.
 * It uses `BrowserRouter` for routing, `Provider` from React Redux for state management, and `App`
 * as the root component. 
 * @module EntryPoint
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

<Provider store={store}>
            <App />
            
</Provider>
          </BrowserRouter>
        </React.StrictMode>
      );
      reportWebVitals();

reportWebVitals();

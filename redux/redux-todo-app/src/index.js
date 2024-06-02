import React from 'react';
import ReactDOM from 'react-dom/client'; // Import client from react-dom
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// Use the new createRoot method
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

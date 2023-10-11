import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from "./redux/store.jsx"
import { Provider } from 'react-redux'
import dotenv from 'dotenv';
// dotenv.config();



ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  // </React.StrictMode>
)

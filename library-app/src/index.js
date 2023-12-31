import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/normalize.css';
import './css/header.css'
import './css/main.css'
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import AddMain from './components/Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <AddMain />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

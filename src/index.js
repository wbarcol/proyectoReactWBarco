import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
 

const firebaseConfig = {
  apiKey: "AIzaSyChMwbcaotHKmjFhqwOmNbhvGwrogco64s",
  authDomain: "bikestore-393f1.firebaseapp.com",
  projectId: "bikestore-393f1",
  storageBucket: "bikestore-393f1.appspot.com",
  messagingSenderId: "806341728712",
  appId: "1:806341728712:web:a397f3911dd70255d048fd"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

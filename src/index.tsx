import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDVmHYcM_pHdA6NV8H9t2TrKm0z4EVxOYs",
  authDomain: "mangayaki-e537e.firebaseapp.com",
  projectId: "mangayaki-e537e",
  storageBucket: "mangayaki-e537e.appspot.com",
  messagingSenderId: "464508321053",
  appId: "1:464508321053:web:ab72a02b785b964b3875f4"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebaseAuth.initializeAuth(app);
firebaseAuth.signInWithEmailAndPassword(auth, 'teste@email.com', 'anyPassword')
.then(user => console.log(user)).catch(error => console.log('error', error));



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

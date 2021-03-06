import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { createContext } from 'react';
import { IContext } from './utils/types';

const app = initializeApp({
  apiKey: "AIzaSyCcHRx5GFE5xRZnsDP-5bTJa1LI7IHfOZY",
  authDomain: "voypost-test-63b82.firebaseapp.com",
  databaseURL: "https://voypost-test-63b82-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "voypost-test-63b82",
  storageBucket: "voypost-test-63b82.appspot.com",
  messagingSenderId: "254930977894",
  appId: "1:254930977894:web:d892d910584958081059a7",
  measurementId: "G-P34BRSKG77"
});

const auth = getAuth(app);
const firestore = getFirestore(app);
export const Context = createContext<IContext>({
  auth: null,
  firestore: null,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Context.Provider value={{
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>
);

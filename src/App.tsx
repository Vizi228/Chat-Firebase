import { FC, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';

import './App.css';
import AppRouter from './components/AppRouter';
import Loader from './components/Loader';
import Navbar from './components/Navbar';

const App: FC = () => {
  const { auth } = useContext(Context)
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loader />
  }
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

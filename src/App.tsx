import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Game from './components/Game/Game';
import Login from './components/Login/Login';
import { RootStore } from './Store';

const App: React.FC = () => {
  const user = useSelector((store: RootStore) => store.username);
  return (
    <div className='container'>
      { user ? <Game /> : <Login /> }
    </div>
  );
}

export default App;

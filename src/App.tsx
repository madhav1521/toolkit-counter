import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToolkitCounter from './Redux-Toolkit/Toolkit-Counter/ToolkitCounter';
import Header from './components/Header';
import AuthLogin from './components/AuthLogin';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state:any) => state.auth.isAuthenticated)
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {!isAuth && <AuthLogin />}
        {isAuth && <ToolkitCounter />}
      </header>
    </div>
  );
}

export default App;

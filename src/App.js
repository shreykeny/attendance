import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing'; 
import Attendance from './components/Attendance'; 
import Login from './components/Login'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Landing />
      <Attendance />
      <Login />
    </div>
  );
}

export default App;

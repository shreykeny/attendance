import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Attendance from './components/Attendance';
import Login from './components/Login';
import Header from './components/About';





import { BrowserRouter, Route, Switch } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Landing />
        <Switch>
          <Route path="/home" component={Header} />

          <Route path="/login" component={Login} />
          <Route path="/admin" component={Attendance} />



        </Switch >


      </BrowserRouter>

    </div>
  );
}

export default App;

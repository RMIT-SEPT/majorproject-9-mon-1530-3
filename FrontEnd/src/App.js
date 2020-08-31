import React from 'react';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import {Provider} from "react-redux";
import store from "./store";


import Login from './components/loginPage';
import Register from './components/signUpPage';
import Index from './components/indexPage';
import CreateBooking from './components/CreateBooking';
import Nav from './components/Layout/Nav';

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <div>
        <Nav></Nav>
          <header className="App-header">
              <Route exact path="/index" component={Index}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/CreateBooking" component={CreateBooking}/>
          </header>
          </div>
      </Router>
    </Provider>
  );
}

export default App;

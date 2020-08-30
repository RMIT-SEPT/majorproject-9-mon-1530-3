import React from 'react';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Login from './components/loginPage';
import Register from './components/signUpPage';
import Index from './components/indexPage';
import CreateBooking from './components/CreateBooking';

function App() {
  return (
      <Router>
        <div>
          <header className="App-header"> Welcome
              <Route exact path="/index" component={Index}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/CreateBooking" component={CreateBooking}/>
              <a href = "/login">Login</a>
              <a href = "/Register">Register</a>
              <a href = "/CreateBooking">Create Booking</a>
          </header>
          </div>
      </Router>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Login from './components/loginPage';
import Register from './components/signUpPage';
import Index from './components/indexPage';

function App() {
  return (
      <Router>
        <div>
          <header className="App-header">
              <Route exact path="/index" component={Index}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
          </header>
        </div>
      </Router>
  );
}

export default App;

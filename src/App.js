import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import RemoveWhitespace from './RemoveWhitespace';
import Home from './Home';

class App extends Component {

  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <ul className="header header-style">
            </ul>
            <div className="content container">
              <Route exact path="/" component={Home} />
              <Route exact path="/removewhitespace" component={RemoveWhitespace} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;

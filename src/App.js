import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import UserInput from "./UserInput.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
  
      </div>
    );
  }
}

export default App;

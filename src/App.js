import React, { Component } from 'react';
import logo from './images/logo.svg';
import Snail from './Snail';
import title from './images/title.png';
import Example from './Example'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={title}  alt="plop" />
          <img src={logo} className="App-logo" alt="logo" />
          <p classname="app-title">Race the snails - win the prize!</p>
        </header>
        <p className="App-intro">
        <Example snailColour="red" />
        <Example snailColour="green"/>
        <Example snailColour="blue"/>
        <Example snailColour="red" />
        <Example snailColour="green"/>
        <Example snailColour="blue"/>
        </p>
      </div>
    );
  }
}

export default App;

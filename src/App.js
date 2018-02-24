import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flag: false,
    }
  }
  updateFlag = () => {
    this.setState({
      flag: !this.state.flag,
    })
  }
  render() {
    const buttonText = this.state.flag ? 'Hello' : 'world';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.updateFlag}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;

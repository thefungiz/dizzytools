import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Whitespace extends Component {

  constructor(pros) {
    super(pros);
    this.state = {
      output: ""
    }
  }

  removeWhitespace(e) {
    let v = e.target.value;
    let o = v.replace(/\s/g,'');~
    this.setState({
      output: o
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Whitespace Remover</h1>
        </header>
        <p>Input:</p>
        <textarea onChange={e => this.removeWhitespace(e)}></textarea>
        <p>Output:</p>
        <p>{this.state.output}</p>
      </div>
    );
  }
}

export default Whitespace;

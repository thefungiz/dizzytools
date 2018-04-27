import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Dizzy Tools</h1>
                </header>
                Welcome home
            </div>
        );
    }
}

export default Home;

import React, { Component } from 'react';
import logo from '../logo.svg';

export class Home extends Component {
    render() {
        return (
            <div id="home">
                <img src={logo} className="App-logo" alt="React logo" width={200} />
                <h1>React Host</h1>
            </div>
        );
    }
}

export default Home;
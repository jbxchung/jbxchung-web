import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Settings />
        <div className="main-content">
          main content placeholder
        </div>
      </div>
    );
  }
}

export default App;

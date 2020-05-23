import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import MainContent from './components/MainContent/MainContent';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Settings />
        <MainContent />
      </div>
    );
  }
}

export default App;

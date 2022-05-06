import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';

import Pages from './constants/pageMapping';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: Object.keys(Pages).map(pageName => Pages[pageName]),
    };
  }

  render() {
    return (
      <div className="container">
        <Router>
          <Navbar />
          <Settings />

          <div className="main-content">
            <div className="bg" />
            <Routes>
              {
                this.state.pages.map(page => (
                  <Route path={page.url} key={page.url} element={<page.component />} />
                ))
              }
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

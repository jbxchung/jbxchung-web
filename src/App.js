import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
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
            <Switch>
              {
                this.state.pages.map((page) => {
                  if (Array.isArray(page.url)) {
                    return page.url.map(url => (
                      <Route exact path={url} key={page.url} component={page.component} />
                    ));
                  }
                  return <Route exact path={page.url} key={page.url} component={page.component} />;
                })
              }
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

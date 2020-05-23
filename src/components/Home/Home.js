import React, { Component } from 'react';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="bg" />
        <div className="center-banner">
          <span className="banner-text">Design</span>
          <span>❖</span>
          <span className="banner-text text-accent-green">Develop</span>
          <span>❖</span>
          <span className="banner-text text-accent-orange">Deploy</span>
        </div>
        <div className="banner-section">
          Jiehong&nbsp;
          <span className="text-accent-green">Brandon </span>
          Xavier&nbsp;
          <span className="text-accent-green">Chung</span>
        </div>
        <div className="banner-section summary-text">
          Clean code, optimized. Full stack.
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  render() {
    this.props.test = 'asdf';
    if (this.props.test === 'asdf') {
      console.log('asdf');
    }
    return <div>navbar</div>;
  }
}

Navbar.propTypes = {
  test: PropTypes.string.isRequired,
};

export default Navbar;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class NavbarLink extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.target);
  }

  render() {
    return (
      <div className={`navbar-link${this.props.active ? ' active' : ''}`} onClick={this.onClick}>
        <Link ref={this.linkRef} to={this.props.target}>{this.props.title}</Link>
      </div>
    );
  }
}

NavbarLink.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavbarLink;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        {this.props.title}
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

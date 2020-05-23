import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SettingsIcon from '../../img/settings.svg';
import './Settings.scss';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };

    this.onIconClick = this.onIconClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', () => this.closeMenu());
  }

  onIconClick() {
    if (this.state.isMenuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.setState({ isMenuOpen: true });
  }

  closeMenu() {
    this.setState({ isMenuOpen: false });
  }

  render() {
    return (
      <div className="settings-icon" onClick={this.onIconClick}>
        <SettingsIcon />
        {this.state.isMenuOpen && (
          <div>
            settings menu placeholder
          </div>
        )}
      </div>
    );
  }
}

export default Settings;

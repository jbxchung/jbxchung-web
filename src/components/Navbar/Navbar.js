import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import pageMapping from '../../constants/pageMapping';
import NavbarLink from './NavbarLink';

import * as actions from '../../actions';

import logo from '../../img/logo_white_transparent.png';
// import Logo from '../../img/logo.svg';
import MenuIcon from '../../img/menu.svg';

import './Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNavMenu: false,
    };

    this.onMenuIconClick = this.onMenuIconClick.bind(this);
    this.onMouseClickEvent = this.onMouseClickEvent.bind(this);
    this.onNavbarItemClick = this.onNavbarItemClick.bind(this);

    this.navbarContentRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.onMouseClickEvent);
    this.props.selectActivePage(this.props.location.pathname);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onMouseClickEvent);
  }

  // close dropdown navbar on click outside
  onMouseClickEvent(e) {
    if (!this.navbarContentRef.current.contains(e.target)) {
      this.setState({ showNavMenu: false });
    }
  }

  onMenuIconClick() {
    this.setState(prevState => ({ showNavMenu: !prevState.showNavMenu }));
  }

  onNavbarItemClick(newPageId) {
    this.props.selectActivePage(newPageId);
  }

  render() {
    /* eslint-disable no-return-assign */
    return (
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="logo" className="home-logo" onClick={() => window.location = '/'} />
        </div>
        <div ref={this.navbarContentRef} className="navbar-content">
          <MenuIcon viewBox="0 0 24 24" onClick={this.onMenuIconClick} />
          <div className={`navbar-links${this.state.showNavMenu ? ' open' : ''}`}>
            {
              Object.keys(pageMapping).map((pageName) => {
                const page = pageMapping[pageName];
                let url = page.url;
                let isActive = this.props.activePageId === url;
                if (Array.isArray(page.url)) {
                  url = page.url[0];
                  isActive = url.indexOf(this.props.activePageId) !== -1;
                }

                return (
                  <NavbarLink
                    active={isActive}
                    key={url}
                    onClick={this.onNavbarItemClick}
                    target={url}
                    title={page.navbarTitle}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  activePageId: PropTypes.string.isRequired,
  selectActivePage: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    activePageId: state.activePageId,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectActivePage: actions.selectActivePage,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));

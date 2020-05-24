import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import pageMapping from '../../constants/pageMapping';

class MainContent extends Component {
  render() {
    console.log(pageMapping[this.props.activePageId]);
    const SelectedComponent = pageMapping[this.props.activePageId].component || this.props.activePageId;
    return (
      <div className="main-content">
        <div className="bg" />
        <SelectedComponent />
      </div>
    );
  }
}

MainContent.propTypes = {
  activePageId: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    activePageId: state.activePageId,
  };
}

export default connect(mapStateToProps, null)(MainContent);

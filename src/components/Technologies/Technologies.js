import React, { Component } from 'react';

import ResumeData from '../../constants/resumeData';
import hashCode from '../../utils/hashCode';

import './Technologies.scss';

class Technologies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      technologies: ResumeData.technologies,
    };

    this.buildNestedItems = this.buildNestedItems.bind(this);
    this.buildSection = this.buildSection.bind(this);
  }

  buildNestedItems(items) {
    return items.map(item => (
      <div className="item" key={hashCode(item.name)}>
        <span className="item-label">{item.name}</span>
        {item.experience && ` - ${item.experience}`}
        {item.items && this.buildNestedItems(item.items)}
      </div>
    ));
  }

  buildSection(sectionData) {
    return (
      <div className="section">
        <h2>{sectionData.header}</h2>
        <div className="items">
          {this.buildNestedItems(sectionData.items)}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="tech-container">
        <div className="section">
          {this.buildSection(this.state.technologies.frontEnd)}
          {this.buildSection(this.state.technologies.backEnd)}
        </div>
        <div className="section">
          {this.buildSection(this.state.technologies.sourceControlDevOps)}
          {this.buildSection(this.state.technologies.other)}
        </div>
      </div>
    );
  }
}

export default Technologies;

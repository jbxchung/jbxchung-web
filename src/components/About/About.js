import React, { Component } from 'react';

import ResumeData from '../../constants/resumeData';

import './About.scss';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: ResumeData.about,
    };

    this.buildSection = this.buildSection.bind(this);
  }

  buildSection(sectionData) {
    return (
      <div className="text-section" key={sectionData.header}>
        <h2>{sectionData.header}</h2>
        {sectionData.render ? sectionData.render(sectionData.content) : sectionData.content}
      </div>
    );
  }

  render() {
    return (
      <div className="about-container">
        {this.state.about.sections.map(this.buildSection)}
      </div>
    );
  }
}

export default About;

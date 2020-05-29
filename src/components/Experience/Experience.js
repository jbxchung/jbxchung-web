import React, { Component } from 'react';
import ScaledTimeline from 'react-scaled-timeline';

import ResumeData from '../../constants/resumeData';
import hashCode from '../../utils/hashCode';

import './Experience.scss';

class Experience extends Component {
  constructor(props) {
    super(props);

    const timelineData = [];
    ResumeData.experience.companies.forEach((company) => {
      company.jobs.forEach((job) => {
        timelineData.push({
          data: job,
          dateRange: job.dateRange,
        });
      });
    });

    this.state = {
      timelineData,
    };

    this.buildNestedDescription = this.buildNestedDescription.bind(this);
    this.renderJob = this.renderJob.bind(this);
  }

  buildNestedDescription(description) {
    return description.map((desc) => (
      <div className="description-text" key={hashCode(desc.text)}>
        <span>{desc.text}</span>
        {desc.description && this.buildNestedDescription(desc.description)}
      </div>
    ));
  }

  renderJob(entry) {
    const { data } = entry;
    return (
      <div className="job-card">
        <h3>{data.title}</h3>
        <p>{JSON.stringify(data.dateRange)}</p>
        <div className="description-section">{this.buildNestedDescription(data.description)}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="experience-container">
        <ScaledTimeline
          className="experience-timeline"
          colorCycle={['#c9606e', '#c38f61', '#c2c86b', '#71c86e', '#4ab6d3', '#4d7ad4', '#6a59d7', '#cc64da', '#e0e082']}
          entryRenderer={this.renderJob}
          timelineData={this.state.timelineData}
        />
      </div>
    );
  }
}

export default Experience;

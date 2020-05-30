import React, { Component } from 'react';
import ScaledTimeline from 'react-scaled-timeline';

import ResumeData from '../../constants/resumeData';
import hashCode from '../../utils/hashCode';
import shortDate from '../../utils/shortDate';

import './Experience.scss';

class Experience extends Component {
  constructor(props) {
    super(props);

    const timelineData = [];
    // add work experience
    ResumeData.experience.companies.forEach((company) => {
      company.jobs.forEach((job, jobIndex) => {
        const jobData = (
          ({ title, location, description }) => ({ title, location, description })
        )(job);
        timelineData.push({
          data: {
            company: jobIndex === 0 ? company.name : (company.shortName || company.name),
            jobData,
          },
          dateRange: job.dateRange,
        });
      });
    });

    // add life events
    ResumeData.experience.events.forEach((event) => {
      timelineData.push({
        data: { text: event.name },
        dateRange: {
          start: event.date,
        },
        renderer: (entry) => (
          <div className="event-card">
            {`${shortDate(new Date(entry.dateRange.start))} - ${entry.data.text}`}
          </div>
        ),
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
    const { data, dateRange } = entry;
    const { jobData } = data;

    const startDate = shortDate(new Date(dateRange.start));
    const endDate = jobData.isCurrent ? 'current' : shortDate(new Date(dateRange.end));

    return (
      <div className="job-card">
        <h3>{`${data.company} - ${jobData.title}`}</h3>
        <p>{`${startDate} - ${endDate}`}</p>
        <div className="description-section">{this.buildNestedDescription(jobData.description)}</div>
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

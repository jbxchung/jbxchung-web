import React from 'react';
import HtmlReactParser from 'html-react-parser';

const ResumeData = {
  about: {
    sections: [
      {
        header: 'Bio',
        content: HtmlReactParser(`
          <p>
            My name is Jiehong Brandon Xavier Chung, but I go by Brandon. I currently work in the financial technology space, 
            developing enterprise web applications, automating trade workflows, and writing chatbots on the Symphony financial chat platform.
          </p>
          <p>
            In my free time, some of my other interests include tinkering with electronics, cooking different kinds of food, and playing the piano and violin. As
            for physical activities, I also enjoy hiking, table tennis, and Taekwondo.
          </p>
        `),
      },
      {
        header: 'Education',
        content: [
          {
            degree: 'MS in Cybersecurity',
            name: 'New York University',
            graduationDate: 'Spring 2024 (projected)',
            location: 'New York, NY (remote)',
            description: ['NYU Cyber Fellows, part-time in parallel with career'],
          },
          {
            degree: 'BS in Computer Engineering',
            name: 'Boston University',
            graduationDate: 'January 2017',
            location: 'Boston, MA',
            description: ['GPA: 3.54 <i>cum laude</i> + Dean\'s List'],
          },
          {
            name: 'Staten Island Technical High School',
            graduationDate: 'June 2013',
            location: 'New York, NY',
            description: [
              'GPA: 101.95 (weighted), 98.0 (unweighted)',
              'SAT: 2320 (790 Math, 750 Reading, 780 Writing), SAT II: Math 2 - 800, Physics - 800',
              '2013 National AP Scholar with Distinction',
            ],
          },
        ],
        render: content => (
          content.map(education => (
            <div className="education-entry" key={education.name}>
              <div className="education-header" key={education.name}>
                {education.degree}
              </div>
              <span className="education-name">{education.name}</span>
              <span className="education-details">
                {` - ${education.graduationDate}`}
                {` - ${education.location}`}
              </span>
              {education.description.map(line => <p key={line}>{HtmlReactParser(line)}</p>)}
            </div>
          ))
        ),
      },
    ],
  },
  technologies: {
    frontEnd: {
      header: 'Front End',
      items: [
        {
          name: 'Javascript (ES6, Node, React, jQuery)',
          experience: '6 years',
          items: [
            { name: 'Enterprise web applications' },
            { name: 'Rapid UI/UX prototyping' },
            { name: 'Webpack and Babel for builds and minification' },
            { name: 'ESLint to enforce code style and maintainability' },
          ],
        },
        {
          name: 'HTML5, CSS3',
          experience: '6 years',
          items: [
            { name: 'SCSS/SASS/LESS' },
            { name: 'Bootstrap, CSS Grid, Flexbox' },
          ],
        },
        {
          name: 'Python (Django)',
        },
      ],
    },
    backEnd: {
      header: 'Back End',
      items: [
        {
          name: 'Javascript (Node, Express)',
          experience: '6 years',
          items: [
            { name: 'REST APIs and services' },
            { name: 'Data aggregation/filtering' },
            { name: 'Interfacing with chatbot SDKs (Symphony, Kore.ai)' },
            { name: 'Downstream service integration' },
          ],
        },
        {
          name: 'Java (Maven, Spring)',
          experience: '4 years',
          items: [
            { name: 'Project architecture and software design patterns' },
            { name: 'REST APIs and websocket endpoints' },
            { name: 'Service implementations, database connections' },
            { name: 'Scheduled processes, user metrics and statistics' },
          ],
        },
        {
          name: 'MongoDB, SQL',
          experience: '4 years',
        },
      ],
    },
    other: {
      header: 'Other',
      items: [
        { name: 'C++, C (Linux, embedded systems)', experience: '4 years' },
        { name: 'C# (WPF, WinForms)', experience: '2 years' },
        { name: 'Python', experience: '2 years' },
        { name: 'Java (Android)' },
        { name: 'x86 assembly' },
      ],
    },
    sourceControlDevOps: {
      header: 'Source Control + DevOps',
      items: [
        { name: 'Git', experience: '9 years' },
        { name: 'TeamCity, uDeploy', experience: '4 years' },
        { name: 'Docker', experience: '1 year' },
        { name: 'Kubernetes', experience: '1 year' },
        { name: 'Ansible' },
        { name: 'SVN' },
      ],
    },
  },
  experience: {
    companies: [
      {
        name: 'Citi Institutional Clients Group',
        shortName: 'Citi',
        jobs: [
          {
            title: 'Assistant Vice President',
            dateRange: {
              start: Date.UTC(2019, 8),
              end: new Date().getTime(),
            },
            isCurrent: true,
            location: 'Jersey City, NJ',
            description: [
              {
                text: 'Working closely with the business and external clients on new financial chat platform initiatives, automating trade workflows via chatbots and web application integration',
                description: [
                  { text: 'Working on the Symphony chat platform with 40,000+ active users' },
                ],
              },
              { text: 'Coordinating sprints, development, testing, and releases with teams across the US, Canada, and China' },
              { text: 'Technical lead for an automated RFQ workflow application in collaboration with AllianceBernstein' },
              { text: 'Developed a global block trading workflow from initial concept through to production deployment' },
            ],
          },
          {
            title: 'Intermediate Programmer Analyst',
            dateRange: {
              start: Date.UTC(2018, 8),
              end: Date.UTC(2019, 8),
            },
            location: 'Jersey City, NJ',
            description: [{ text: 'Worked with global teams (US, Canada, Israel, China) to design, develop, and integrate a web application that leverages NLP in traders’ chats to automate trade workflows across asset classes.' }],
          },
          {
            title: 'IT Graduate Associate',
            dateRange: {
              start: Date.UTC(2017, 6),
              end: Date.UTC(2018, 8),
            },
            location: 'Jersey City, NJ',
            description: [
              { text: 'Designed and developed a Client Relationship Management platform' },
              { text: 'Created a UX Design System' },
            ],
          },
          {
            title: 'Summer Analyst Intern',
            dateRange: {
              start: Date.UTC(2016, 6),
              end: Date.UTC(2016, 8),
            },
            location: 'New York, NY',
            description: [{ text: 'Developed and integrated a WPF control for in-house traders' }],
          },
        ],
      },
      {
        name: 'DevXApp',
        jobs: [{
          title: 'Android Application Developer',
          dateRange: {
            start: Date.UTC(2014, 9),
            end: Date.UTC(2015, 7),
          },
          location: 'Boston, MA',
          description: [{ text: 'Developed an Android application for food services at Boston University' }],
        }],
      },
    ],
    events: [
      {
        name: 'Graduated from Boston University',
        date: Date.UTC(2017, 1),
      },
    ],
  },
  contact: {},
};

export default ResumeData;

import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ResumeData = {
  about: {
    sections: [
      {
        header: 'Bio',
        content: ReactHtmlParser(`
          <p>
            My name is Jiehong Brandon Xavier Chung, but I go by Brandon. Currently I am working in the financial technology space, 
            developing enterprise web applications and automating trade workflows.
          </p>
          <p>
            In my free time, I have a few interests - from tinkering with electronics, to cooking all sorts of foods from different regions
            around the world, to playing the piano and violin. As for physical activities, I also enjoy hiking, table tennis, and Taekwondo.
          </p>
        `),
      },
      {
        header: 'Education',
        content: [
          {
            name: 'Boston University',
            graduationDate: 'January 2017',
            location: 'Boston, MA',
            description: ['BS in Computer Engineering, 3.54 <i>cum laude</i> + Dean\'s List'],
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
        render: (content) => (
          content.map((education) => (
            <div className="education-entry" key={education.name}>
              <div className="education-header" key={education.name}>
                <div className="education-name">{education.name}</div>
                <div className="education-details">
                  <span>{education.graduationDate}</span>
                  <span>{education.location}</span>
                </div>
              </div>
              {education.description.map((line) => <p key={line}>{ReactHtmlParser(line)}</p>)}
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
          name: 'Javascript (ES6)',
          experience: '4 years',
          items: [
            { name: 'Enterprise web applications using React with redux and redux-saga' },
            { name: 'Rapid UI/UX prototyping with jQuery' },
            { name: 'Webpack and Babel for builds and minification' },
            { name: 'ESLint to enforce code style' },
          ],
        },
        {
          name: 'HTML5, CSS3',
          experience: '4 years',
          items: [
            { name: 'SCSS/SASS/LESS' },
            { name: 'Bootstrap, CSS Grid, and Flexbox' },
          ],
        },
      ],
    },
    backEnd: {
      header: 'Back End',
      items: [
        {
          name: 'Javascript (Node, Express)',
          experience: '4 years',
          items: [
            { name: 'REST APIs and services' },
            { name: 'Data aggregation/filtering with lodash' },
          ],
        },
        {
          name: 'Java (Maven, Spring)',
          experience: '2 years',
          items: [
            { name: 'REST APIs and websocket endpoints' },
            { name: 'Service implementations and database connections' },
          ],
        },
        {
          name: 'MongoDB, SQL',
          experience: '2 years',
        },
      ],
    },
    other: {
      header: 'Other',
      items: [
        { name: 'C++, C (Linux, embedded systems)', experience: '4 years' },
        { name: 'C# (WPF, WinForms)', experience: '2 years' },
        { name: 'Java (Android)' },
        { name: 'Python' },
        { name: 'x86 assembly' },
      ],
    },
    sourceControlDevOps: {
      header: 'Source Control + DevOps',
      items: [
        { name: 'Git', experience: '7 years' },
        { name: 'TeamCity, uDeploy', experience: '2 years' },
        { name: 'SVN (TortoiseSVN)', experience: '1 year' },
      ],
    },
  },
  experience: {},
  contact: {},
};

export default ResumeData;

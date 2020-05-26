const ResumeData = {
  about: {},
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
            { name: 'Webpack and Babel for builds' },
            { name: 'ESLint to enforce code style' },
          ],
        },
        {
          name: 'HTML5, CSS3',
          experience: '4 years',
          items: [
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
            { name: 'REST APIs, data aggregation/filtering with lodash' },
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
      ],
    },
  },
  experience: {},
  contact: {},
};

export default ResumeData;

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

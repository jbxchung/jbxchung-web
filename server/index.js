const express = require('express');
const path = require('path');

const app = express();
const config = require('./config');

// serve static resources for webapp at /dist
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// pass through all other get request paths for the webapp to handle
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(config.port, () => {
  console.log(`Server started in ${config.env} on port ${config.port}.`);
});

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Cristian\'s Home Page');
});

app.get('/about', (req, res) => {
  res.send('Welcome to Cristian\'s About Page');
});

app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
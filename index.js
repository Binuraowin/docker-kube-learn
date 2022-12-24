const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware function to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request received for ${req.url}`);
  next();
});

// Middleware function to parse request body
app.use(express.json());

// Middleware function to serve static files
app.use(express.static('public'));

// Middleware function to handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

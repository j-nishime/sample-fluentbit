'use strict';
const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  console.log('{"level": "info", "message": "root"}');
  res.send('root');
});

app.get('/hello', (req, res) => {
  console.log('{"level": "debug", "message": "hello"}');
  res.send('Hello World');
});

app.get('/test', (req, res) => {
  console.log('{"level": "debug", "message": "test"}');
  res.send('This is Test');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
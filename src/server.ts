import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('Hello CI/CD!');
});

server.listen(9999);

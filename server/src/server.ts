import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json([
    'Diego',
    'Alexandre',
    'test'
  ]);
});

app.listen(3333);
import express from 'express';
import route from './routes/app.js';
import bodyParser from 'body-parser';

const server = express();

server.use(bodyParser.json());
server.use(route);

server.listen(5000, () => {
  console.log('listening port 5000');
});

import express from 'express';
import {
  getText,
  postText,
  getTextById,
  updateText,
  deleteText,
} from '../controlers/app.js';

const route = express.Router();

route.get('/text', getText);
route.get('/text/:id', getTextById);
route.post('/text', postText);
route.put('/text/:id', updateText);
route.delete('/text/:id', deleteText);

export default route;

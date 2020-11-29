import {
  getAllText,
  postNewText,
  getTextResource,
  updateTextResource,
  deleteTextResource,
} from '../models/app.js';

export const getText = async (request, response) => {
  const text = await getAllText();
  return response.send(text);
};

export const getTextById = async (request, response) => {
  const {
    params: { id },
  } = request;
  const textResource = await getTextResource(id);
  return response.send(textResource);
};

export const postText = async (request, response) => {
  const { body } = request;

  const newText = await postNewText(body);
  return response.send(newText);
};

export const updateText = async (request, response) => {
  const {
    params: { id },
    body,
  } = request;
  const textResource = await updateTextResource(id, body);
  return response.send(textResource);
};

export const deleteText = async (request, response) => {
  const {
    params: { id },
  } = request;
  const deleteIdText = await deleteTextResource(id);
  return deleteIdText;
};

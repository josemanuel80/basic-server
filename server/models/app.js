import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

export const getAllText = async () => {
  const textFile = await fs.readFile('./data/data.json');
  return textFile;
};

export const getTextResource = async (id) => {
  const textList = await fs.readFile('./data/data.json');
  const { texto } = JSON.parse(textList);
  const textResource = texto.find((item) => item.id === id);
  return textResource;
};

export const postNewText = async (data) => {
  const textFile = await fs.readFile('./data/data.json');
  const { texto } = JSON.parse(textFile);
  const dataText = { ...data, id: uuidv4() };
  texto.push(dataText);
  await fs.writeFile('./data/data.json', JSON.stringify({ texto }));
  return texto;
};

export const updateTextResource = async (id, body) => {
  const listText = await fs.readFile('./data/data.json');
  const { texto } = JSON.parse(listText);
  const textResource = texto.find((item) => item.id === id);
  if (textResource) {
    const index = texto.indexOf(textResource);
    texto[index] = { ...body, id };
    await fs.writeFile('./data/data.json', JSON.stringify({ texto }));
    return { ...body, id };
  } else {
    throw new Error('Error:not found');
  }
};

export const deleteTextResource = async (id) => {
  const listText = await fs.readFile('./data/data.json');
  const { texto } = JSON.parse(listText);
  const textResource = texto.find((item) => item.id === id);
  if (textResource) {
    const index = texto.indexOf(textResource);
    texto.splice(index, 1);
    await fs.writeFile('./data/data.json', JSON.stringify({ texto }));
  }
};

import { ART_API, OBJECT_IDS } from '../constants.js';

export const getItems = async () => Promise.all(
  OBJECT_IDS.map(async (id) => {
    const response = await fetch(`${ART_API}/${id}`);
    return response.json();
  }),
);

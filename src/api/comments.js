import { INVOLVEMENT_API, APP_ID } from '../constants.js';

export const getComments = async (id) => {
  const response = await fetch(
    `${INVOLVEMENT_API}/apps/${APP_ID}/comments?item_id=${id}`,
  );
  const data = await response.json();
  return data;
};

export const postComment = async (id, name, comment) => {
  const response = await fetch(`${INVOLVEMENT_API}/apps/${APP_ID}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment,
    }),
  });
  const data = await response.json();
  return data;
};

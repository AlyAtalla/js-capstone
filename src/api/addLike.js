import { APP_ID, INVOLVEMENT_API } from '../constants.js';

export const addLike = async (item_id) => {
  try {
    await fetch(`${INVOLVEMENT_API}/apps/${APP_ID}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id,
      }),
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    
  }
};

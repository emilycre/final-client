import store from '../store';
import { getToken } from '../selectors/sessionSelectors';

const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken(store.getState())}`
    },
    body: body ? JSON.stringify(body) : null
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw `cannot fetch ${path}`;

      return json;
    });
};

export const postComment = comment => request('/api/v1/comments', 'POST', comment);
export const getComments = id => request(`/api/v1/comments/${id}`, 'GET');

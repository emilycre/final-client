export const getCharacters = () => {
  return fetch('https://dragon-age-api.herokuapp.com/api/v1/characters?appearances=inquisition')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'cannot get characters';

      return json;
    });
};

export const getCharacterById = id => {
  return fetch(`https://dragon-age-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'cannot get character';

      return json;
    });
};

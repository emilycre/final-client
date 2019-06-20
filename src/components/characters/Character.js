import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => (
  <section>
    <p>{character.name}</p>
    <img src={character.photo} />
  </section>
);

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
  }).isRequired
};

export default Character;

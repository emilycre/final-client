import React from 'react';
import PropTypes from 'prop-types';
import CreateComment from '../../containers/comments/CreateComment';
import CommentsByCharacter from '../../containers/comments/CommentsByCharacter';

const CharacterDetail = ({ character }) => {
  return (
    <>
      <p>Name: {character.name}</p>
      <p>Race: {character.race}</p>
      <p>Gender: {character.gender}</p>
      <img src={character.photo} />
      <CreateComment characterId={character._id} />
      <CommentsByCharacter characterId={character._id} />
    </>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
  }).isRequired
};

export default CharacterDetail;

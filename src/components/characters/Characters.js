import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const Characters = ({ characters }) => {
  const characterList = characters.map(character => (
    <li key={character._id}>
      <Link to={`/${character._id}`}>
        <Character character={character} />
      </Link>
    </li>
  ));

  return (
    <>
      <ul>
        {characterList}
      </ul>
    </>
  );
};

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;

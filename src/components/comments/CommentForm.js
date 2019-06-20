import React from 'react';
import PropTypes from 'prop-types';

export const CommentForm = ({ handleSubmit, handleChange, body }) => (
  <form onSubmit={handleSubmit}>
    <textarea value={body} onChange={handleChange} />
    <button>Create</button>
  </form>
);

CommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  body: PropTypes.string.isRequired
};

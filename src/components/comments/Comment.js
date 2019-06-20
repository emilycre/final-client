import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <p>{comment.body}</p>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;

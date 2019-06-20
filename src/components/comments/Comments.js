import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const Comments = ({ comments }) => {
  const commentList = comments.map(comment => (
    <li key={comment._id}>
      <Comment comment={comment} />
    </li>
  ));

  return (
    <>
      <ul>
        {commentList}
      </ul>
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;

import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions/commentsActions';
import { CommentForm } from '../../components/comments/CommentForm';
import PropTypes from 'prop-types';

class CreateComment extends React.PureComponent {
  static propTypes = {
    createComment: PropTypes.func.isRequired,
    characterId: PropTypes.string.isRequired
  }

  state = {
    body: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.state.body, this.props.characterId);
    this.setState({ body: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ body: target.value });
  }

  render() {
    return (
      <CommentForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        body={this.state.body}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createComment(body, characterId) {
    dispatch(createComment({ body, characterId }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateComment);

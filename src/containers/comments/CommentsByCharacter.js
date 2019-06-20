import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Comments from '../../components/comments/Comments';
import { getComments } from '../../selectors/commentsSelectors';
import { fetchComments } from '../../actions/commentsActions';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  comments: getComments(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchComments(props.characterId));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Comments)));

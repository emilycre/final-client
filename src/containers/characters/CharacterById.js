import CharacterDetail from '../../components/characters/CharacterDetail';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCharacter, getCharactersLoading } from '../../selectors/charactersSelectors';
import { fetchCharacter } from '../../actions/charactersActions';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  character: getCharacter(state),
  loading: getCharactersLoading(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchCharacter(props.match.params.id));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(CharacterDetail)));

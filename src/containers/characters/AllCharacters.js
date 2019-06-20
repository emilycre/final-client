import { fetchCharacters } from '../../actions/charactersActions';
import { getCharacters, getCharactersLoading } from '../../selectors/charactersSelectors';
import { connect } from 'react-redux';
import Characters from '../../components/characters/Characters';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Characters));

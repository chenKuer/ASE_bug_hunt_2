// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reset, reduxForm } from 'redux-form';
import Home from '../components/Home';
import * as GamesActions from '../actions/games';

function mapStateToProps({ games, auth }) {
  return { games, auth };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GamesActions, dispatch);
}

const afterSubmit = (result, dispatch) => dispatch(reset('GameCodeForm'));

export default reduxForm({
  form: 'GameCodeForm',
  onSubmitSuccess: afterSubmit
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);

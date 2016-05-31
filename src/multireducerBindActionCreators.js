import { bindActionCreators } from 'redux';
import multireducerWrapDispatch from './wrapDispatch';

export default function multireducerBindActionCreators(multireducerKey, actionCreators, dispatch) {
  return bindActionCreators(actionCreators, multireducerWrapDispatch(dispatch, multireducerKey));
}

import multireducerWrapAction from './wrapAction.js';

export default function multireducerWrapDispatch(dispatch, multireducerKey) {
  const wrappingDispatch = (action) => {
    if (typeof action === 'function') {
      const wrappedThunk = (globalDispatch, getState) => action(wrappingDispatch, getState, globalDispatch, multireducerKey);
      return dispatch(wrappedThunk);
    } else if (typeof action === 'object') {
      return dispatch(multireducerWrapAction(action, multireducerKey));
    }
  };
  return wrappingDispatch;
}

import multireducerBindActionCreators from './multireducerBindActionCreators';

const wrapMapDispatchToProps = (mapDispatchToProps, multireducerKey) => {
  if (mapDispatchToProps) {
    if (typeof mapDispatchToProps === 'function') {
      return (dispatch, ownProps) => ({
        dispatch,
        ...mapDispatchToProps(multireducerKey, dispatch, ownProps)
      });
    }
    return dispatch => ({
      dispatch,
      ...multireducerBindActionCreators(multireducerKey, mapDispatchToProps, dispatch)
    });
  }
  return dispatch => ({
    dispatch
  });
};

export default wrapMapDispatchToProps;

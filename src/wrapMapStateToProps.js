const wrapMapStateToProps = (mapStateToProps, multireducerKey) => {
  if (mapStateToProps) {
    if (typeof mapStateToProps !== 'function') {
      throw new Error('mapStateToProps must be a function');
    }
    return (state, ownProps) => ({
      ...mapStateToProps(multireducerKey, state, ownProps),
    });
  }
  return () => ({ });
};

export default wrapMapStateToProps;

import React, { Component, PropTypes } from 'react';
import hoistStatics from 'hoist-non-react-statics';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function withMultireducerContext(WrappedComponent, mrKey) {
  class WithMrCntxt extends Component {
    getChildContext() {
      return { multireducerKey: mrKey };
    }
    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
  WithMrCntxt.displayName = `WithMrCntxt(${getDisplayName(WrappedComponent)})`;
  WithMrCntxt.childContextTypes = {
    multireducerKey: PropTypes.string,
  };
  WithMrCntxt.WrappedComponent = WrappedComponent;
  return hoistStatics(WithMrCntxt, WrappedComponent);
}

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const DefaultLoader = () => <h1>Loading!</h1>;

export const withFetch = (Component, LoadingComponent = DefaultLoader) => {
  class WithFetch extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
      loading: PropTypes.bool.isRequired
    }

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      const { loading } = this.props;
      if(loading) return <LoadingComponent />;
      
      return <Component {...this.props} />;
    }
  }

  return WithFetch;
};

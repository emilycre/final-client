import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const DefaultLoader = () => <h1>Loading!</h1>;

export const withFetch = (Component, LoadingComponent = DefaultLoader) => {
  class WithFetch extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired
    }

    state = {
      loading: false
    }

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      const { loading } = this.state;
      if(loading) return <LoadingComponent />;
      
      return <Component {...this.props} />;
    }
  }

  return WithFetch;
};

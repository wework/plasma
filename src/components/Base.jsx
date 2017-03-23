import { mapKeys, kebabCase } from 'lodash';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

export default function Base(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dataAttrs: null
      }
    }

    componentDidMount() {
      const { data } = this.props;

      if (!data) return;

      this.setState({
        dataAttrs: mapKeys(data, (val, key) => `data-${kebabCase(key)}`)
      });
    }

    render() {
      const { dataAttrs } = this.state;

      return (
        <div {...dataAttrs}>
          <Component {...this.props} />
        </div>
      );
    }
  }
}

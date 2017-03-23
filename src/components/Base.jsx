import { mapKeys, kebabCase } from 'lodash';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

export default function Base(Component) {
  return class extends React.Component {
    getDataAttrs() {
      const { data } = this.props;

      if (!data) return {};

      return mapKeys(data, (val, key) => `data-${kebabCase(key)}`)
    }

    render() {
      return (
        <div {...this.getDataAttrs()}>
          <Component {...this.props} />
        </div>
      );
    }
  }
}

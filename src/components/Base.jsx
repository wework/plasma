import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

export default function Base(Component) {
  const Base = React.createClass({
    getInitialState() {
      return {
        dataAttrs: null,
      };
    },

    componentDidMount() {
      if (this.props.data) {
        const attrObj = {};
        _.forEach(this.props.data, (value, key) => {
          attrObj['data-' + _.kebabCase(key)] = value;
        });
        this.setState({ dataAttrs: attrObj });
      }
    },

    render() {
      return (
        <div {...this.state.dataAttrs}>
          <Component
            ref={(c) => { this.compEl = c; }}
            {...this.props}
          />
        </div>
      );
    },
  });
  return Base;
}

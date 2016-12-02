import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

export default function Base(Component) {
  const Base = React.createClass({
    componentDidMount() {
      if (this.props.data) {
        const attrObj = {};
        _.forEach(this.props.data, (value, key) => {
          attrObj['data-' + _.kebabCase(key)] = value;
        });
        $(ReactDOM.findDOMNode(this.compEl)).attr(attrObj);
      }
    },
    render() {
      return (
        <Component
          ref={(c) => { this.compEl = c; }}
          {...this.props}
        />
      );
    },
  });
  return Base;
}

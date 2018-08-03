// @flow
/* eslint react/prop-types: 0 */
import React, { type Node } from 'react';
import cx from 'classnames';
import { map, isArray, toArray } from 'lodash';
import { getDataAttrs } from '../../../dataUtils';
import type { Data } from '../../../types';
import style from './style.scss';

type Props = {|
    children: Array<Node>,
    vertical: boolean,
    layout: Array<Object>,
    style: Object,
    data: Data,
|};

class Group extends React.Component<Props> {
  static defaultProps = {
    children: [],
    layout: [],
  };
  render() {
    const groupStyle = cx(style.wrapper, {
      [style.vertical]: this.props.vertical,
    });

    let children = this.props.children;
    if (!isArray(this.props.children)) {
      children = toArray(this.props.children);
    }

    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={groupStyle}
        style={this.props.style}
      >
        {map(children, (child, index) => {
          const styleObj = {};
          if (this.props.layout[index] === 'shrink') {
            styleObj.flexShrink = '1';
          } else if (this.props.layout[index] === 'grow') {
            styleObj.flexGrow = '1';
          } else if (this.props.layout[index]) {
            styleObj.flexBasis = this.props.layout[index];
          } else {
            styleObj.flexBasis = `${100 / this.props.children.length}%`;
          }

          return (<div
            key={index}
            style={styleObj}
          >
            {child}
          </div>);
        })}
      </div>
    );
  }
}

Group.displayName = 'Plasma@Group';

export default Group;

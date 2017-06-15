import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _ from 'lodash';
import getDataAttrs from '../../../getDataAttrs';
import style from './style.scss';

class Group extends React.Component {
  render() {
    const groupStyle = cx(style.wrapper, {
      [style.vertical]: this.props.vertical,
    });

    let children = this.props.children;
    if (!_.isArray(this.props.children)) {
      children = _.toArray(this.props.children);
    }

    return (
      <div
        className={groupStyle}
        style={this.props.style}
        {...getDataAttrs(this.props.data)}
      >
        {_.map(children, (child, index) => {
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

Group.defaultProps = {
  children: [],
  layout: [],
};

Group.propTypes = {
  children: PropTypes.node,
  vertical: PropTypes.bool,
  layout: PropTypes.array,
  style: PropTypes.object,
  data: PropTypes.obj,
};

Group.displayName = 'Group';

export default Group;

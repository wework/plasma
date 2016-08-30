import React from 'react';
import cx from 'classnames';
import _ from 'lodash';
import style from './style.scss';

class Group extends React.Component {
  render() {
    const groupStyle = cx(style.wrapper, {
      [style.vertical]: this.props.vertical,
    });

    return (
      <div className={groupStyle}>
        {_.map(this.props.children, (child, index) => {
          const styleObj = {};
          if (this.props.layout[index] === 'shrink') {
            styleObj.flexShrink = '1';
          } else if (this.props.layout[index] === 'grow') {
            styleObj.flexGrow = '1';
          } else if (this.props.layout[index]) {
            styleObj.flexBasis = this.props.layout[index];
          } else {
            styleObj.flexGrow = '1';
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
  children: React.PropTypes.node,
  vertical: React.PropTypes.boolean,
  layout: React.PropTypes.array,
};

Group.displayName = 'Group';

export default Group;

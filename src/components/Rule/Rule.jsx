import cx from 'classnames';
import React from 'react';

import Base from '../Base.jsx';
import style from './style.scss';

const type = { SOLID: 'solid', DOTTED: 'dotted', DASHED: 'dashed' };

class Rule extends React.Component {
  render() {
    const ruleStyle = cx(style.wrapper, {
      [style.dotted]: this.props.type === type.DOTTED,
      [style.dashed]: this.props.type === type.DASHED,
    });

    return (
      <hr className={ruleStyle} />
    );
  }
}

Rule.defaultProps = {
  type: type.SOLID,
};

Rule.propTypes = {
  type: React.PropTypes.string,
};

Rule.displayName = 'Rule';

export default Base(Rule);

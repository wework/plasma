import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import getDataAttrs from '../../getDataAttrs';
import style from './style.scss';

const type = { SOLID: 'solid', DOTTED: 'dotted', DASHED: 'dashed' };

class Rule extends React.Component {
  render() {
    const ruleStyle = cx(style.wrapper, {
      [style.dotted]: this.props.type === type.DOTTED,
      [style.dashed]: this.props.type === type.DASHED,
    });

    return (
      <hr
        {...getDataAttrs(this.props)}
        className={ruleStyle}
      />
    );
  }
}

Rule.defaultProps = {
  type: type.SOLID,
};

Rule.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
};

Rule.displayName = 'Rule';

export default Rule;

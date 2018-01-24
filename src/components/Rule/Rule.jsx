import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { getDataAttrs, getDataProps } from '../../dataUtils';

const type = { SOLID: 'solid', DOTTED: 'dotted', DASHED: 'dashed' };

class Rule extends React.Component {
  render() {
    const ruleStyle = cx(style.wrapper, {
      [style.dotted]: this.props.type === type.DOTTED,
      [style.dashed]: this.props.type === type.DASHED,
      [style.withTopMargin]: this.props.withTopMargin,
    });

    return <hr {...getDataAttrs(this.props)} className={ruleStyle} />;
  }
}

Rule.defaultProps = {
  type: type.SOLID,
};

Rule.propTypes = {
  type: PropTypes.string,
  withTopMargin: PropTypes.bool,
  ...getDataProps(),
};

Rule.displayName = 'Plasma@Rule';

export default Rule;

// @flow
import cx from 'classnames';
import React from 'react';
import style from './style.scss';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';

const type = { SOLID: 'solid', DOTTED: 'dotted', DASHED: 'dashed' };

type Props = {|
  type?: string,
  withTopMargin?: boolean,
  data?: Data,
|};

/**
 * @deprecated
 */
class Rule extends React.Component<Props> {
  static defaultProps = {
    type: type.SOLID,
  };

  render() {
    const ruleStyle = cx(style.wrapper, {
      [style.dotted]: this.props.type === type.DOTTED,
      [style.dashed]: this.props.type === type.DASHED,
      [style.withTopMargin]: this.props.withTopMargin,
    });

    return <hr {...getDataAttrs(this.props)} className={ruleStyle} />;
  }
}

Rule.displayName = 'Plasma@Rule';

export default Rule;

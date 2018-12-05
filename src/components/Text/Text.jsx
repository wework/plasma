// @flow
import React, { type Node } from 'react';
import cx from 'classnames';
import style from './style.scss';
import type { Data } from '../../types';
import { getDataAttrs } from '../../dataUtils';

export type Props = {|
  children: Node,
  data?: Data,
  large?: boolean,
  style?: { [string]: string | number },
  type?: string,
|};

const types = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

class Text extends React.Component<Props> {
  static defaultProps = {
    style: { width: 200, height: 'auto' },
  };
  render() {
    const { large, type } = this.props;
    const textStyle = cx(style.wrapper, {
      [style.large]: large,
      [style.primary]: type === types.PRIMARY,
      [style.secondary]: type === types.SECONDARY,
    });
    return (
      <div {...getDataAttrs(this.props.data)} className={textStyle} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

Text.displayName = 'Plasma@Text';

export default Text;

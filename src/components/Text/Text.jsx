// @flow
/* eslint react/prop-types: 0 */
import React from 'react';
import cx from 'classnames';
import style from './style.scss';
import type { Data } from '../../dataUtils';
import { getDataAttrs } from '../../dataUtils';

export type Props = {
  children: React.Node,
  data?: Data,
  large?: boolean,
  style?: Object,
  type?: string,
};

const types = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

class Text extends React.Component {
  render() {
    const { large, type } = this.props;
    const textStyle = cx(style.wrapper, {
      [style.large]: large,
      [style.primary]: type === types.PRIMARY,
      [style.secondary]: type === types.SECONDARY,
    });
    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={textStyle}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

Text.defaultProps = {
  style: { width: 200, height: 'auto' },
};

Text.displayName = 'Plasma@Text';

export default Text;

// @flow
import cx from 'classnames';
import React, { type Node } from 'react';

import Loader from '../Loader/Loader.jsx';

import { getDataAttrs } from '../../dataUtils';

import type { Data } from '../../types';

import style from './style.scss';

const Variants = { PRIMARY: 'primary', SECONDARY: 'secondary', TERTIARY: 'tertiary' };
const Sizes = { SMALL: 'small' };

type Props = {|
  label?: string,
  onClick?: (evt: MouseEvent) => void,
  type?: $Values<typeof Variants>,
  disabled?: boolean,
  loading?: boolean,
  children?: Node,
  style?: { [key: string]: any },
  isSubmit?: boolean,
  size?: $Values<typeof Sizes>,
  data?: Data,
|};

class Button extends React.Component<Props> {
  static defaultProps = {
    type: Variants.PRIMARY,
    disabled: false,
    loading: false,
  };

  render() {
    const {
      children,
      className,
      data,
      disabled,
      isSubmit,
      label,
      loading,
      onClick,
      size,
      type,
    } = this.props;

    const classes = cx(style.button, className, {
      [style.primary]: type === Variants.PRIMARY,
      [style.secondary]: type === Variants.SECONDARY,
      [style.tertiary]: type === Variants.TERTIARY,
      [style.small]: size === Sizes.SMALL,
      [style.loading]: loading,
    });

    let contentComponent;
    if (loading) {
      const loaderDotStyle = (type === Variants.SECONDARY || type === Variants.TERTIARY) ?
        { backgroundColor: '#000', opacity: '0.1' } :
        null;

      contentComponent = <Loader dotStyle={loaderDotStyle} />;
    } else {
      contentComponent = children || label;
    }

    const buttonType = isSubmit ? 'submit' : 'button';

    return (
      <button
        {...getDataAttrs(data)}
        className={classes}
        disabled={disabled}
        style={style}
        onClick={onClick}
        type={buttonType}
      >
        {contentComponent}
      </button>
    );
  }
}

Button.displayName = 'Plasma@Button';

export default Button;

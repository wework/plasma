// @flow
import cx from 'classnames';
import React, { type Node } from 'react';

import Loader from '../Loader/Loader.jsx';

import { getDataAttrs } from '../../dataUtils';

import type { Data } from '../../types';

import styles from './style.scss';

const Variants = Object.freeze({
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
});
const Sizes = Object.freeze({
  SMALL: 'small',
});

type Props = {|
  autofocus?: boolean,
  children?: Node,
  className?: string,
  data?: Data,
  disabled?: boolean,
  hidden?: boolean,
  label?: string,
  loading?: boolean,
  name?: string,
  onClick?: (evt: MouseEvent) => void,
  id?: string,
  isSubmit?: boolean,
  size?: $Values<typeof Sizes>,
  style?: { [key: string]: any },
  type?: $Values<typeof Variants>,
  value?: string,
  tabIndex?: number,
  title?: string,
|};

function Button(props: Props): Node {
  const {
    children,
    className,
    data,
    disabled = false,
    isSubmit,
    label,
    loading = false,
    onClick,
    size,
    style,
    type = Variants.PRIMARY,
    ...rest
  } = props;

  const classes = cx(styles.button, className, {
    [styles.primary]: type === Variants.PRIMARY,
    [styles.secondary]: type === Variants.SECONDARY,
    [styles.tertiary]: type === Variants.TERTIARY,
    [styles.small]: size === Sizes.SMALL,
    [styles.loading]: loading,
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

  return (
    <button
      {...getDataAttrs(data)}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      style={style}
      type={isSubmit ? 'submit' : 'button'}
      {...rest}
    >
      {contentComponent}
    </button>
  );
}

Button.displayName = 'Plasma@Button';

export default Button;

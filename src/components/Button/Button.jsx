// @flow
import cx from 'classnames';
import React from 'react';

import Loader from '../Loader/Loader';

import { getDataAttrs } from '../../dataUtils';

import type { Data, StyleAttributes } from '../../types';

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
  children?: React$Node,
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
  style?: StyleAttributes,
  type?: $Values<typeof Variants>,
  value?: string,
  tabIndex?: number,
  title?: string,
|};

/**
 * @deprecated
 */
function Button(props: Props): React$Node {
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
    // eslint-disable-next-line comma-dangle
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
    const loaderDotStyle =
      type === Variants.SECONDARY || type === Variants.TERTIARY
        ? { backgroundColor: '#000', opacity: '0.1' }
        : undefined;

    contentComponent = <Loader dotStyle={loaderDotStyle} />;
  } else {
    contentComponent = children || label;
  }

  return (
    // eslint-disable-next-line react/button-has-type
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

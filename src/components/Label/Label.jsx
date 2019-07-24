// @flow
import React, { type Node } from 'react';
import cx from 'classnames';

import { getDataAttrs } from '../../dataUtils';
import type { Data, GlobalAttributes } from '../../types';

import styles from './style.scss';

type Props = {|
  children?: Node,
  data?: Data,
  disabled?: boolean,
  htmlFor?: string,
  inline?: boolean,
  required?: boolean,
  text?: string,
  ...GlobalAttributes,
|};

function Label({
  children,
  className,
  data,
  disabled,
  htmlFor,
  inline,
  required,
  text,
  ...rest
}: Props) {
  const classes = cx(styles.label, className, {
    [styles.labelInline]: inline,
    [styles.labelDisabled]: disabled,
    [styles.labelRequired]: required,
  });

  return (
    <label className={classes} htmlFor={htmlFor} {...getDataAttrs(data)} {...rest}>
      {children || text}
    </label>
  );
}

Label.displayName = 'Plasma@Label';

export default Label;

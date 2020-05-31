// @flow
import React from 'react';
import cx from 'classnames';
import { getDataAttrs } from '../../dataUtils';
import type { Data, GlobalAttributes } from '../../types';

import styles from './style.scss';

type Props = {|
  children?: React$Node,
  data?: Data,
  disabled?: boolean,
  error?: boolean,
  text?: string,
  ...GlobalAttributes,
|};

/**
 * @deprecated
 */
const Hint = ({ children, className, data, disabled, error, text, ...rest }: Props) => {
  const classes = cx(styles.hint, className, {
    [styles.hintDisabled]: disabled,
    [styles.hintError]: error,
  });

  return (
    <div className={classes} {...getDataAttrs(data)} {...rest}>
      {children || text}
    </div>
  );
};

Hint.displayName = 'Plasma@Hint';

export default Hint;

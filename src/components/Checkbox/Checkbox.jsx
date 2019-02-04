// @flow
import React, { type Node } from 'react';
import { uniqueId } from 'lodash';
import cx from 'classnames';

import { getDataAttrs } from '../../dataUtils';

import styles from './style.scss';

import type {
  ChangeEventHanlders,
  Data,
  FocusEventHandlers,
  GlobalAttributes,
  SyntheticMouseEventHandler,
} from '../../types';

type Props = {|
  checked?: boolean,
  data?: Data,
  disabled?: boolean,
  error?: boolean,
  // TODO(grozki): This can only be set using a ref, should we include it?
  // See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
  // indeterminate?: boolean,
  name?: string,
  children?: Node,
  value?: string,
  onClick?: SyntheticMouseEventHandler<HTMLInputElement>,
  ...FocusEventHandlers<HTMLInputElement>,
  ...ChangeEventHanlders<HTMLInputElement>,
  ...GlobalAttributes,
|};

class Checkbox extends React.Component<Props> {
  static defaultProps = {
    error: false,
  };

  render() {
    const { children, className, data, disabled, error, id, onClick, ...rest } = this.props;

    const classes = cx(styles.wrapper, className, {
      [styles.wrapperDisabled]: disabled,
      [styles.wrapperError]: error,
    });

    const checkboxId = id || uniqueId('checkbox-');

    return (
      <div {...getDataAttrs(data)} className={classes}>
        <input
          type="checkbox"
          className={styles.checkbox}
          disabled={disabled}
          id={checkboxId}
          {...rest}
        />
        <label className={styles.label} onClick={onClick} htmlFor={checkboxId}>
          {children}
        </label>
      </div>
    );
  }
}

Checkbox.displayName = 'Plasma@Checkbox';

export default Checkbox;

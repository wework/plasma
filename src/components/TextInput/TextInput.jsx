// @flow
import React, { Component, type Node } from 'react';
import cx from 'classnames';

import { getDataAttrs } from '../../dataUtils';
import type {
  ChangeEventHanlders,
  Data,
  FocusEventHandlers,
  GlobalAttributes,
  SyntheticMouseEventHandler,
} from '../../types';

import styles from './style.scss';

type Props = {|
  data?: Data,
  disabled?: boolean,
  error?: boolean,
  maxLength?: number | string,
  name?: string,
  placeholder?: string,
  prefix?: Node,
  suffix?: Node,
  type?: 'text' | 'password' | 'email' | 'url',
  value?: string,
  onClick?: SyntheticMouseEventHandler<HTMLInputElement>,
  ...FocusEventHandlers<HTMLInputElement>,
  ...ChangeEventHanlders<HTMLInputElement>,
  ...GlobalAttributes,
|};

class TextInput extends Component<Props> {
  static defaultProps = {
    placeholder: 'Type something...',
  };

  render() {
    const { className, disabled, error, data, prefix, suffix, type, ...rest } = this.props;

    const inputType = type || 'text';

    const classes = cx(styles.wrapper, className, {
      [styles.wrapperDisabled]: disabled,
      [styles.wrapperError]: error,
    });

    return (
      <div {...getDataAttrs(data)} className={classes}>
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        <input className={styles.input} disabled={disabled} type={inputType} {...rest} />
        {suffix && <div className={styles.suffix}>{suffix}</div>}
      </div>
    );
  }
}

TextInput.displayName = 'Plasma@TextInput';

export default TextInput;

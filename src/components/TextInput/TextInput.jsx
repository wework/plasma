// @flow
import React, { Component, type Node } from 'react';
import cx from 'classnames';

import { getDataAttrs } from '../../dataUtils';
import type {
  Data,
  InputProps,
} from '../../types';

import styles from './style.scss';

type Props = {|
  data?: Data,
  maxLength?: number | string,
  onClick?: (SyntheticMouseEvent<HTMLInputElement>) => void,
  onFocus?: (SyntheticFocusEvent<HTMLInputElement>) => void,
  onBlur?: (SyntheticFocusEvent<HTMLInputElement>) => void,
  placeholder?: string,
  prefix?: Node,
  style?: { [key: string]: any },
  suffix?: Node,
  type?: 'text' | 'password' | 'email' | 'url',
  ...$Exact<InputProps>
|};

class TextInput extends Component<Props> {
  static defaultProps = {
    placeholder: 'Type something...',
  };

  render() {
    const {
      disabled,
      error,
      data,
      prefix,
      style,
      suffix,
      type,
      ...rest
    } = this.props;

    const inputType = type || 'text';

    const classes = cx(styles.wrapper, {
      [styles.wrapperDisabled]: disabled,
      [styles.wrapperError]: error,
    });

    return (
      <div
        {...getDataAttrs(data)}
        className={classes}
        style={style}
      >
        {
          prefix && <div className={styles.prefix}>{prefix}</div>
        }
        <input
          className={styles.input}
          disabled={disabled}
          type={inputType}
          {...rest}
        />
        {
          suffix && <div className={styles.suffix}>{suffix}</div>
        }
      </div>
    );
  }
}

TextInput.displayName = 'Plasma@TextInput';

export default TextInput;

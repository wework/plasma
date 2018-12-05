// @flow
import { toUpper } from 'lodash';
import React, { type Node } from 'react';
import cx from 'classnames';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import styles from './style.scss';

type Props = {|
  placeholder: string,
  value: string,
  onChange: () => void,
  onFocus: () => void,
  onBlur: () => void,
  suffix: Node,
  prefix: Node,
  isDisabled: boolean,
  disabled: boolean,
  size: number,
  error: boolean,
  maxLength: string,
  data: Data,
  id?: string,
  name?: string,
  style?: { [key: string]: any },
|};

const TextInput = ({
  suffix,
  prefix,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  isDisabled,
  disabled,
  size,
  error,
  data,
  maxLength,
  id,
  name,
  style,
}: Props) => {
  const fixStyle = cx(styles.fix, {
    [styles.suffix]: suffix,
    [styles.prefix]: prefix,
  });

  const wrapperStyle = cx(styles.wrapper, {
    [styles.wrapperDisabled]: isDisabled || disabled,
    [styles.wrapperError]: error,
    [styles.wrapperLarge]: toUpper(size) === 'LARGE',
  });

  const inputStyle = cx(styles.input, {
    [styles.disabled]: isDisabled || disabled,
    [styles.large]: toUpper(size) === 'LARGE',
  });

  return (
    <div {...getDataAttrs(data)} className={wrapperStyle} style={style}>
      <input
        className={inputStyle}
        disabled={isDisabled || disabled}
        id={id}
        name={name}
        onChange={onChange}
        onFocus={e => {
          /* eslint-disable no-param-reassign */
          e.target.parentElement.className += ` ${styles.wrapperFocused}`;
          /* eslint-enable no-param-reassign */
          onFocus && onFocus();
        }}
        onBlur={e => {
          e.target.parentElement.classList.remove(styles.wrapperFocused);
          onBlur && onBlur();
        }}
        placeholder={placeholder}
        type="text"
        value={value}
        maxLength={maxLength}
      />
      {(suffix || prefix) && <div className={fixStyle}>{suffix || prefix}</div>}
    </div>
  );
};

TextInput.defaultProps = {
  placeholder: 'Type something...',
  isDisabled: false,
};

TextInput.displayName = 'Plasma@TextInput';

export default TextInput;

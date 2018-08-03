// @flow
/* eslint react/prop-types: 0 */
import { toUpper } from 'lodash';
import React, { type Node } from 'react';
import cx from 'classnames';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import style from './style.scss';

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
    size: boolean,
    error: boolean,
    maxLength: string,
    data: Data,
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
}: Props) => {
  const fixStyle = cx(style.fix, {
    [style.suffix]: suffix,
    [style.prefix]: prefix,
  });

  const wrapperStyle = cx(style.wrapper, {
    [style.wrapperDisabled]: isDisabled || disabled,
    [style.wrapperError]: error,
    [style.wrapperLarge]: toUpper(size) === 'LARGE',
  });

  const inputStyle = cx(style.input, {
    [style.disabled]: isDisabled || disabled,
    [style.large]: toUpper(size) === 'LARGE',
  });

  return (
    <div {...getDataAttrs(data)} className={wrapperStyle}>
      <input
        className={inputStyle}
        disabled={isDisabled || disabled}
        onChange={onChange}
        onFocus={e => {
          /* eslint-disable no-param-reassign */
          e.target.parentElement.className += ` ${style.wrapperFocused}`;
          /* eslint-enable no-param-reassign */
          onFocus && onFocus();
        }}
        onBlur={e => {
          e.target.parentElement.classList.remove(style.wrapperFocused);
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

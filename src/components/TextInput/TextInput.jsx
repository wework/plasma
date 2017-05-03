import _ from 'lodash';
import React from 'react';
import cx from 'classnames';

import Base from '../Base.jsx';
import style from './style.scss';

const TextInput = (
  {
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
  }
) => {
  const fixStyle = cx(style.fix, {
    [style.suffix]: suffix,
    [style.prefix]: prefix,
  });

  const wrapperStyle = cx(style.wrapper, {
    [style.wrapperDisabled]: isDisabled || disabled,
    [style.wrapperError]: error,
    [style.wrapperLarge]: _.toUpper(size) === 'LARGE',
  });

  const inputStyle = cx(style.input, {
    [style.disabled]: isDisabled || disabled,
    [style.large]: _.toUpper(size) === 'LARGE',
  });

  return (
    <div className={wrapperStyle}>
      <input
        className={inputStyle}
        disabled={isDisabled || disabled}
        onChange={onChange}
        onFocus={(e) => {
          /* eslint-disable no-param-reassign */
          e.target.parentElement.className += ` ${style.wrapperFocused}`;
          /* eslint-enable no-param-reassign */
          onFocus && onFocus();
        }}
        onBlur={(e) => {
          e.target.parentElement.classList.remove(style.wrapperFocused);
          onBlur && onBlur();
        }}
        placeholder={placeholder}
        type="text"
        value={value}
      />
      {(suffix || prefix) &&
        <div className={fixStyle}>
          {suffix || prefix}
        </div>}
    </div>
  );
};

TextInput.propTypes = {
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  suffix: React.PropTypes.node,
  prefix: React.PropTypes.node,
  // DEPRECATED - Use 'disabled' instead
  isDisabled: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  size: React.PropTypes.bool,
  error: React.PropTypes.bool,
};

TextInput.defaultProps = {
  placeholder: 'Type something...',
  isDisabled: false,
};

TextInput.displayName = 'TextInput';

export default Base(TextInput);

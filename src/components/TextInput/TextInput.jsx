import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import getDataAttrs from '../../getDataAttrs';
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
    data,
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
    <div
      className={wrapperStyle}
      {...getDataAttrs(data)}
    >
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
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  suffix: PropTypes.node,
  prefix: PropTypes.node,
  // DEPRECATED - Use 'disabled' instead
  isDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.obj,
};

TextInput.defaultProps = {
  placeholder: 'Type something...',
  isDisabled: false,
};

TextInput.displayName = 'TextInput';

export default TextInput;

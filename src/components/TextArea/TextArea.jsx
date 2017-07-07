import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Base from '../Base.jsx';
import style from './style.scss';

const TextArea = (
  {
    placeholder,
    value,
    onChange,
    onFocus,
    onBlur,
    disabled,
    size,
    rows,
    error,
  }
) => {
  const wrapperStyle = cx(style.wrapper, {
    [style.wrapperDisabled]: disabled,
    [style.wrapperError]: error,
    [style.wrapperLarge]: _.toUpper(size) === 'LARGE',
  });

  const textareaStyle = cx(style.textarea, {
    [style.disabled]: disabled,
    [style.large]: _.toUpper(size) === 'LARGE',
  });

  return (
    <div className={wrapperStyle}>
      <textarea
        className={textareaStyle}
        disabled={disabled}
        onChange={onChange}
        rows={rows}
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
        value={value}
      />
    </div>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  rows: PropTypes.number,
  error: PropTypes.bool,
};

TextArea.defaultProps = {
  placeholder: '',
};

TextArea.displayName = 'TextArea';

export default Base(TextArea);

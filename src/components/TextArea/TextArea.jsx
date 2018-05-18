import { toUpper } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDataAttrs, getDataProps } from '../../dataUtils';
import Autogrow from './autogrow';
import style from './style.scss';

class TextArea extends Component {
  render() {
    const {
      data,
      disabled,
      error,
      maxLength,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      rows,
      size,
      value,
    } = this.props;

    const wrapperStyle = cx(style.wrapper, {
      [style.wrapperDisabled]: disabled,
      [style.wrapperError]: error,
      [style.wrapperLarge]: toUpper(size) === 'LARGE',
    });

    const textareaStyle = cx(style.textarea, {
      [style.disabled]: disabled,
      [style.large]: toUpper(size) === 'LARGE',
    });

    return (
      <div className={wrapperStyle} {...getDataAttrs(data)}>
        <textarea
          ref={el => el && autosize && new Autogrow(el)}
          className={textareaStyle}
          disabled={disabled}
          onChange={onChange}
          rows={rows}
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
          value={value}
          maxLength={maxLength}
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  autosize: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  maxLength: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  ...getDataProps(),
};

TextArea.defaultProps = {
  placeholder: '',
  rows: '3',
  autosize: true,
};

TextArea.displayName = 'Plasma@TextArea';

export default TextArea;

import { toUpper } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDataAttrs, getDataProps } from '../../dataUtils';
import Autogrow from './autogrow';
import style from './style.scss';

class TextArea extends Component {
  onChange = (...args) => {
    this.setState({
      value: this.textarea.value,
    });
    return this.props.onChange && this.props.onChange(...args);
  };
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || '',
    };
  }
  render() {
    const {
      counterStyle,
      data,
      disabled,
      error,
      maxLength,
      onBlur,
      onFocus,
      placeholder,
      rows,
      size,
      withCounter,
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
      <div>
        {withCounter && (
          <div className={counterStyle || style.counterStyle}>
            {this.state.value.length}
            {maxLength && `/${maxLength}`} characters
          </div>
        )}
        <div className={wrapperStyle} {...getDataAttrs(data)}>
          <textarea
            ref={el => el && (this.textarea = el) && new Autogrow(el)}
            className={textareaStyle}
            disabled={disabled}
            onChange={this.onChange}
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
            value={this.state.value}
            maxLength={maxLength}
          />
        </div>
      </div>
    );
  }
}

TextArea.propTypes = {
  counterStyle: PropTypes.object,
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
  withCounter: PropTypes.bool,
  ...getDataProps(),
};

TextArea.defaultProps = {
  placeholder: '',
  rows: '3',
};

TextArea.displayName = 'Plasma@TextArea';

export default TextArea;

// @flow
import { toUpper } from 'lodash';
import React, { Component } from 'react';
import cx from 'classnames';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import Autogrow from './autogrow';
import style from './style.scss';

type Props = {|
  autosize: boolean,
  disabled: boolean,
  error: boolean,
  maxLength: string,
  onBlur: () => void,
  onChange: () => void,
  onFocus: () => void,
  placeholder: string,
  rows: string,
  size: string,
  value: string,
  data: Data,
|};

class TextArea extends Component<Props> {
  static defaultProps = {
    placeholder: '',
    rows: '3',
    autosize: true,
  };
  componentWillUnmount() {
    this.autogrow && this.autogrow.destroy();
  }
  onRef = (el: ?Object) => {
    if (el && this.props.autosize) {
      this.autogrow = new Autogrow(el);
    }
  };
  autogrow: Object;
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
          ref={this.onRef}
          className={textareaStyle}
          disabled={disabled}
          onChange={onChange}
          rows={rows}
          onFocus={(e: { target: {parentElement: {className: string}} }) => {
            /* eslint-disable no-param-reassign */
            e.target.parentElement.className += ` ${style.wrapperFocused}`;
            /* eslint-enable no-param-reassign */
            onFocus && onFocus();
          }}
          onBlur={(e: { target: {parentElement: {classList: Object}} }) => {
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

TextArea.displayName = 'Plasma@TextArea';

export default TextArea;

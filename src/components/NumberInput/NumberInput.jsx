// @flow
import { toNumber, toString } from 'lodash';
import React from 'react';
import cx from 'classnames';
import style from './style.scss';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';

type HandleEvent = {|
  target: {
    parentElement: {
      classList: {
        remove: string => mixed,
        add: string => mixed,
      },
    },
  },
  nativeEvent: {
    target: {
      value: Object,
    },
  },
|};

type Props = {|
  data?: Data,
  disabled?: boolean,
  error?: boolean,
  maxValue: number,
  minValue: number,
  onBlur?: HandleEvent => void,
  onChange: HandleEvent => void,
  onFocus?: HandleEvent => void,
  placeholder: string,
  step: number,
  value: string,
|};

/**
 * @deprecated
 */
class NumberInput extends React.Component<Props> {
  static defaultProps = {
    value: '',
    placeholder: '',
    step: 1,
    maxValue: Number.MAX_SAFE_INTEGER,
    minValue: Number.MIN_SAFE_INTEGER,
    onChange() {},
  };

  handleIncrement = (): void => {
    const { maxValue, value, step, onChange } = this.props;
    const prevValue = toNumber(value);
    const nextValue = prevValue + step;
    if (maxValue >= nextValue) onChange(toString(nextValue));
  };

  handleDecrement = (): void => {
    const { minValue, value, step, onChange } = this.props;
    const prevValue = toNumber(value);
    const nextValue = prevValue - step;
    if (minValue <= nextValue) onChange(toString(nextValue));
  };

  handleChange = (e: HandleEvent): void => {
    this.props.onChange && this.props.onChange(e.nativeEvent.target.value);
  };

  handleBlur = (e: HandleEvent): void => {
    e.target.parentElement.classList.remove(style.wrapperFocused);
    this.props.onBlur && this.props.onBlur(e.nativeEvent.target.value);
  };

  handleFocus = (e: HandleEvent): void => {
    e.target.parentElement.classList.add(style.wrapperFocused);
    this.props.onFocus && this.props.onFocus(e.nativeEvent.target.value);
  };

  render() {
    const { disabled, error, data, placeholder, value, step, minValue, maxValue } = this.props;

    const wrapperStyle = cx(style.wrapper, {
      [style.wrapperDisabled]: disabled,
      [style.wrapperError]: error,
    });

    const spinnerStyle = cx(style.spinner, {
      [style.spinnerDisabled]: disabled,
    });

    const inputStyle = cx(style.input, {
      [style.inputDisabled]: disabled,
    });

    const actionStyle = cx(style.action, {
      [style.buttonDisabled]: disabled,
    });

    return (
      <div {...getDataAttrs(data)} className={wrapperStyle}>
        <input
          type="number"
          placeholder={placeholder}
          className={inputStyle}
          disabled={disabled}
          value={value}
          step={step}
          min={minValue}
          max={maxValue}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
        />
        <div className={spinnerStyle}>
          <div className={actionStyle} onClick={!disabled && this.handleIncrement}>
            +
          </div>
          <div className={actionStyle} onClick={!disabled && this.handleDecrement}>
            -
          </div>
        </div>
      </div>
    );
  }
}

NumberInput.displayName = 'Plasma@NumberInput';

export default NumberInput;

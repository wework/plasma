import { isNumber, toNumber } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './style.scss';
import {
  getDataAttrs,
  getDataProps,
} from '../../dataUtils';

class NumberInput extends React.Component {
  handleIncrement = () => {
    const { maxValue, value, step, onBlur, onChange } = this.props;
    const prev = toNumber(value);
    if (maxValue >= prev + step) {
      onChange(prev + step);
      onBlur && onBlur();
    }
  }

  handleDecrement = () => {
    const { minValue, value, step, onBlur, onChange } = this.props;
    const prev = toNumber(value);
    if (minValue <= prev - step) {
      onChange(prev - step);
      onBlur && onBlur();
    }
  }

  handleChange = e => {
    const { onChange } = this.props;
    const value = e.nativeEvent.target.value;
    //when input is cleared, the default value is an empty string
    value === "" ? onChange("") : onChange(toNumber(value));
  }

  handleBlur = e => {
    e.target.parentElement.classList.remove(style.wrapperFocused);
    this.props.onBlur && this.props.onBlur();
  }

  handleFocus = e => {
    e.target.parentElement.classList.add(style.wrapperFocused);
    this.props.onFocus && this.props.onFocus();
  }

  render() {
    const { disabled, error, data, placeholder, value, step, minValue, maxValue } = this.props;

    const wrapperStyle = cx(style.wrapper, {
      [style.wrapperDisabled]: disabled,
      [style.wrapperError]: error,
    })

    const inputStyle = cx(style.input, {
      [style.inputDisabled]: disabled,
    })

    return (
      <div
        {...getDataAttrs(data)}
        className={wrapperStyle}
      >
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
        <div className={style.spinner}>
          <div
            className={style.action}
            onClick={this.handleIncrement}
          >+</div>
          <div
            className={style.action}
            onClick={this.handleDecrement}
          >-</div>
        </div>
      </div>
    );
  }
}

const emptyStringType = (props, propName, componentName) => {
    if (props[propName] !== "") {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  }

NumberInput.propTypes = {
  ...getDataProps(),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  step: PropTypes.number,
  value: PropTypes.oneOfType([emptyStringType, PropTypes.number]).isRequired,
};

NumberInput.defaultProps = {
  placeholder: '',
  step: 1,
  maxValue: Number.MAX_SAFE_INTEGER,
  minValue: Number.MIN_SAFE_INTEGER,
};

NumberInput.displayName = 'Plasma@NumberInput';

export default NumberInput;

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
    if (maxValue >= value + step) {
      onChange(value + step);
      onBlur && onBlur();
    }
  }

  handleDecrement = () => {
    const { minValue, value, step, onBlur, onChange } = this.props;
    if (minValue <= value - step) {
      onChange(value - step);
      onBlur && onBlur();
    }
  }

  handleChange = (event) => {
    const { maxValue, minValue, onChange } = this.props;
    const eventValue = event.nativeEvent.target.value;
    
    // if the value is cleared, do not convert empty string to 0
    if (eventValue === "") return onChange(null)
    const value = toNumber(eventValue);
    if (value <= maxValue && value >= minValue) onChange(value);
  }

  handleBlur = e => {
    this.props.onBlur && this.props.onBlur();
  }

  handleFocus = e => {
    this.props.onFocus && this.props.onFocus();
  }

  render() {
    const { disabled, error, data, placeholder, value, onFocus } = this.props;

    const wrapperStyle = cx(style.wrapper, {
      [style.wrapperDisabled]: disabled,
      [style.wrapperError]: error,
    })

    const inputStyle = cx(style.input, {
      [style.disabled]: disabled,
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
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
};

NumberInput.defaultProps = {
  placeholder: '',
  step: 1,
  maxValue: Number.MAX_SAFE_INTEGER,
  minValue: Number.MIN_SAFE_INTEGER,
};

NumberInput.displayName = 'Plasma@NumberInput';

export default NumberInput;

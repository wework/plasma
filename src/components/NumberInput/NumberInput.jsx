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
  onPressIncrement = () => {
    const { maxValue, value, step, onPressIncrement, onBlur, onChange } = this.props;
    if (isNumber(maxValue) && maxValue >= value + step) {
      onPressIncrement ? onPressIncrement({ diff: step }) : onChange(value + step);
      onBlur && onBlur();
    }
  }

  onPressDecrement = () => {
    const { minValue, value, step, onPressDecrement, onBlur, onChange } = this.props;
    if (isNumber(minValue) && minValue <= value - step) {
      onPressDecrement ? onPressDecrement({ diff: -1 * step }) : onChange(value - step);
      onBlur && onBlur();
    }
  }

  onChange = (event) => {
    const { maxValue, minValue, onChange } = this.props;
    const value = toNumber(event.nativeEvent.target.value);
    if (
      (!maxValue || value <= maxValue) &&
      (!minValue || value >= minValue)
    ) {
      onChange({ value });
    }
  }

  render() {
    const { disabled, error, data, placeholder, value, onChange, onBlur, onFocus } = this.props;
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
          onChange={this.onChange}
          onBlur={(e) => {
            onBlur && onBlur();
          }}
          onFocus={(e) => {
            onFocus && onFocus();
          }}
        />
        <div className={style.spinner}>
          <div
            className={style.action}
            onClick={this.onPressIncrement}
          >+</div>
          <div
            className={style.action}
            onClick={this.onPressDecrement}
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
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onPressDecrement: PropTypes.func,
  onPressIncrement: PropTypes.func,
  placeholder: PropTypes.string,
  step: PropTypes.number,
  value: PropTypes.number,
};

NumberInput.defaultProps = {
  placeholder: '',
  step: 1,
  maxValue: Number.MAX_SAFE_INTEGER,
  minValue: Number.MIN_SAFE_INTEGER,
};

NumberInput.displayName = 'Plasma@NumberInput';

export default NumberInput;

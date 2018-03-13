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
  constructor() {
    super();
    this.onPressIncrement = this.onPressIncrement.bind(this);
    this.onPressDecrement = this.onPressDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onPressIncrement() {
    if (!isNumber(this.props.maxValue) ||
        this.props.maxValue >= this.props.value + this.props.step) {
      this.props.onPressIncrement({ diff: this.props.step });
    }
  }

  onPressDecrement() {
    if (!isNumber(this.props.minValue) ||
        this.props.minValue <= this.props.value - this.props.step) {
      this.props.onPressDecrement({ diff: -1 * this.props.step });
    }
  }

  onChange(event) {
    const value = toNumber(event.nativeEvent.target.value);
    if (
      (!this.props.maxValue || value <= this.props.maxValue) &&
      (!this.props.minValue || value >= this.props.minValue)
    ) {
      this.props.onChange({ value });
    }
  }

  render() {
    const wrapperStyle = cx(style.wrapper, {
      [style.wrapperDisabled]: this.props.disabled,
      [style.wrapperError]: this.props.error,
    })

    const inputStyle = cx(style.input, {
      [style.disabled]: this.props.disabled,
    })
    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={wrapperStyle}
      >
        <input
          type="number"
          placeholder={this.props.placeholder}
          className={inputStyle}
          disabled={this.props.disabled}
          value={this.props.value}
          onChange={this.onChange}
          onBlur={(e) => {
            this.props.onBlur && this.props.onBlur();
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
  onPressDecrement: PropTypes.func,
  onPressIncrement: PropTypes.func,
  placeholder: PropTypes.string,
  step: PropTypes.number,
  value: PropTypes.number,
};

NumberInput.defaultProps = {
  placeholder: '',
  step: 1,
};

NumberInput.displayName = 'Plasma@NumberInput';

export default NumberInput;

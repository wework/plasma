import { isNumber, toNumber } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import getDataAttrs from '../../getDataAttrs';

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
    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={style.wrapper}
      >
        <input
          type="number"
          placeholder={this.props.placeholder}
          className={style.input}
          value={this.props.value}
          onChange={this.onChange}
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
  placeholder: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  onPressIncrement: PropTypes.func,
  onPressDecrement: PropTypes.func,
  data: PropTypes.object,
};

NumberInput.defaultProps = {
  placeholder: '',
  step: 1,
};

NumberInput.displayName = 'Plasma@NumberInput';

export default NumberInput;

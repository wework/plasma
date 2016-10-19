import _ from 'lodash';
import React from 'react';
import style from './style.scss';

class NumberInput extends React.Component {

  constructor() {
    super();
    this.onPressIncrement = this.onPressIncrement.bind(this);
    this.onPressDecrement = this.onPressDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onPressIncrement() {
    if (!_.isNumber(this.props.maxValue) || this.props.maxValue >= this.props.value + this.props.step) {
      this.props.onPressIncrement({ diff: this.props.step });
    }
  }

  onPressDecrement() {
    if (!_.isNumber(this.props.minValue) || this.props.minValue <= this.props.value - this.props.step) {
      this.props.onPressDecrement({ diff: -1 * this.props.step });
    }
  }

  onChange(event) {
    const value = _.toNumber(event.nativeEvent.target.value);
    if (
      (!this.props.maxValue || value <= this.props.maxValue) &&
      (!this.props.minValue || value >= this.props.minValue)
    ) {
      this.props.onChange({ value });
    }
  }

  render() {
    return (
      <div className={style.wrapper}>
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
  placeholder: React.PropTypes.string,
  minValue: React.PropTypes.number,
  maxValue: React.PropTypes.number,
  step: React.PropTypes.number,
  value: React.PropTypes.number,
  onChange: React.PropTypes.func,
  onPressIncrement: React.PropTypes.func,
  onPressDecrement: React.PropTypes.func,
};

NumberInput.defaultProps = {
  placeholder: '',
  step: 1,
};

NumberInput.displayName = 'NumberInput';

export default NumberInput;

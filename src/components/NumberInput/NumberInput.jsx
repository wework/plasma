import _ from 'lodash';
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Base from '../Base.jsx';
import style from './style.scss';

class NumberInput extends React.Component {

  constructor() {
    super();
    this.onPressIncrement = this.onPressIncrement.bind(this);
    this.onPressDecrement = this.onPressDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onPressIncrement() {
    if (!_.isNumber(this.props.maxValue) ||
        this.props.maxValue >= this.props.value + this.props.step) {
      this.props.onPressIncrement({ diff: this.props.step });
    }
  }

  onPressDecrement() {
    if (!_.isNumber(this.props.minValue) ||
        this.props.minValue <= this.props.value - this.props.step) {
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
    const wrapperClasses = cx(style.wrapper, this.props.wrapperClass);

    return (
      <div className={wrapperClasses}>
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
  wrapperClass: PropTypes.object,
  placeholder: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  onPressIncrement: PropTypes.func,
  onPressDecrement: PropTypes.func,
};

NumberInput.defaultProps = {
  placeholder: '',
  step: 1,
};

NumberInput.displayName = 'NumberInput';

export default Base(NumberInput);

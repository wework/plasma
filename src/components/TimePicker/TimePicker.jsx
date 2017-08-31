import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDataProps } from '../../dataUtils';
import style from './style.scss';

class TimePicker extends Component {
  static displayName = 'Plasma@TimePicker'

  static propTypes = {
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    time: PropTypes.string.isRequired,
    ...getDataProps(),
  }

  handleBlur = (event) => {
    const newTime = event.target.value;

    this.props.onBlur(newTime);
  }

  handleChange = (event) => {
    const newTime = event.target.value;

    this.props.onChange(newTime);
  }

  render() {
    const { time } = this.props;

    return (
      <input
        className={style.component}
        type="time"
        name="timePicker"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        value={time}
      />
    );
  }
}

export default TimePicker;

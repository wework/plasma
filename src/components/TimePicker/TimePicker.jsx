// @flow
import React, { Component } from 'react';
import style from './style.scss';
import type { Data } from '../../types';

type Props = {|
  onBlur?: (event: { target: { value: Object } }) => void,
  onChange?: (event: { target: { value: Object } }) => void,
  time: string,
  data?: Data,
  disabled?: boolean,
|};

class TimePicker extends Component<Props> {
  static displayName = 'Plasma@TimePicker';

  handleBlur = (event: { target: { value: Object } }): void => {
    const newTime = event.target.value;

    this.props.onBlur && this.props.onBlur(newTime);
  };

  handleChange = (event: { target: { value: Object } }): void => {
    const newTime = event.target.value;

    this.props.onChange && this.props.onChange(newTime);
  };

  render() {
    const { time, disabled } = this.props;

    return (
      <input
        disabled={disabled}
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

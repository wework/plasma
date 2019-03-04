// @flow
import React, { type Node } from 'react';
import { omit } from 'lodash';
import cn from 'classnames';
import moment from 'moment';
import ReactSelect from 'react-select';

import type { FocusEventHandlers, GlobalAttributes } from '../../types';

import styles from './style.scss';

/**
 * A TimePicker component.
 *
 * Optional 'value' must be in 24H 'HH:mm' format.
 *
 * Optional 'minTime' in 24H 'HH:mm' format, default time 00:00.
 *
 * Optional 'maxTime' in 24H 'HH:mm' format, default time 24:00.
 *
 * Optional 'timeIntervalMinutes', Time step for time slots, default is 30 minute.
 *
 * Optional 'timeFormatType' label type in 24H or 12H, default 12H.
 *
 * Optional 'defaultOption':
 *    nextInterval = will round up: 11:26 -> 11:30  based on 'timeIntervalMinutes'.
 *    minimum (default selection) =  will select 'minTime'.
 *
 * Optional 'disabled'.
 *
 * Optional 'error'.
 *
 * Optional 'required'.
 *
 * Optional 'name'.
 *
 * Optional 'id'.
 *
 * Optional 'tabIndex'.
 *
 * onChange receives string value in 24H 'HH:mm' format.
 *
 * Optional 'onBlur'.
 *
 * Optional 'onFocus'.
 */

export const FormatTypes = Object.freeze({
  timeFormat12: 'hh:mm A',
  timeFormat24: 'HH:mm',
});

export type TimeFormatType = $Values<typeof FormatTypes>;

export const DefaultOptions = Object.freeze({
  minimum: 'minimum',
  nextInterval: 'nextInterval',
});

export type DefaultOption = $Values<typeof DefaultOptions>;

type Option = {|
  label: string,
  value: string,
|};

type Props = {|
  defaultOption?: DefaultOption,
  disabled?: boolean,
  error?: boolean,
  maxTime: string,
  minTime: string,
  onChange?: string => void,
  placeholder?: string,
  required?: boolean,
  name?: string,
  timeFormat: TimeFormatType,
  timeIntervalMinutes: number,
  borderless?: boolean,
  value?: string,
  ...FocusEventHandlers<>,
  ...GlobalAttributes,
|};

class TimePicker extends React.Component<Props> {
  static defaultProps = {
    minTime: '00:00',
    maxTime: '24:00',
    timeFormat: FormatTypes.timeFormat12,
    timeIntervalMinutes: 30,
    placeholder: 'Select time',
  };

  getValue(value: ?string): ?string {
    if (!value) {
      return this.defaultTimeSelected();
    }

    const maxTime = moment(this.props.maxTime, FormatTypes.timeFormat24);
    const minTime = moment(this.props.minTime, FormatTypes.timeFormat24);
    const valueMoment = moment(value, FormatTypes.timeFormat24);

    if (valueMoment.isBefore(minTime)) {
      return this.props.minTime;
    }

    if (valueMoment.isAfter(maxTime)) {
      return this.props.maxTime;
    }

    return value;
  }

  getTimeInFormat = (timeValue: moment): string => {
    return timeValue.format(this.props.timeFormat);
  };

  getOptions = () => {
    const maxTime = moment(this.props.maxTime, FormatTypes.timeFormat24);
    const minTime = moment(this.props.minTime, FormatTypes.timeFormat24);

    const timeValue = minTime.clone();
    const options = [];

    while (timeValue.isSameOrBefore(maxTime)) {
      options.push({
        value: timeValue.format(FormatTypes.timeFormat24),
        label: this.getTimeInFormat(timeValue),
      });

      timeValue.add(this.props.timeIntervalMinutes, 'minutes');
    }

    return options;
  };

  handleChange = (option: Option) => {
    const { onChange } = this.props;
    if (onChange) onChange(option.value);
  };

  iconRenderer(): Node {
    return <span className={styles.selectClockIcon} />;
  }

  defaultTimeSelected(): ?string {
    const { timeIntervalMinutes, defaultOption } = this.props;
    switch (defaultOption) {
      case DefaultOptions.nextInterval: {
        const roundedUp = Math.ceil(moment().minute() / timeIntervalMinutes) * timeIntervalMinutes;

        return moment()
          .minute(roundedUp)
          .second(0)
          .format(FormatTypes.timeFormat24);
      }
      case DefaultOptions.minimum:
        return moment(this.props.minTime, FormatTypes.timeFormat24).format(
          FormatTypes.timeFormat24
        );
      default:
        return null;
    }
  }

  render() {
    const { className, error, borderless, value, ...rest } = this.props;

    const timeSelectClassName = cn(styles.selectInput, className, {
      [styles.borderless]: borderless,
      [styles.selectInputError]: error,
    });

    const restProps = omit(
      rest,
      'defaultOption',
      'hidden', // TODO(grozki): Get this to work?
      'maxTime',
      'minTime',
      'timeFormat',
      'timeIntervalMinutes',
      'title' // TODO(grozki): Get this to work?
    );

    return (
      <ReactSelect
        arrowRenderer={this.iconRenderer}
        className={timeSelectClassName}
        clearable={false}
        onChange={this.handleChange}
        options={this.getOptions()}
        searchable={false}
        value={this.getValue(value)}
        {...restProps}
      />
    );
  }
}

TimePicker.displayName = 'Plasma@TimePicker';

export default TimePicker;

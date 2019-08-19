// @flow
import React from 'react';
import moment from 'moment';
import cn from 'classnames';
import ReactSelect from 'react-select';
import { omit } from 'lodash';
import type { GlobalAttributes, SyntheticFocusEventHandler } from '../../types';

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
 * Optional 'menuIsOpen': Whether dropdown is open. Default: false.
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

const FormatTypes = Object.freeze({
  timeFormat12: 'hh:mm A',
  timeFormat24: 'HH:mm',
});

export type TimeFormatType = $Values<typeof FormatTypes>;

const DefaultOptions = Object.freeze({
  minimum: 'minimum',
  nextInterval: 'nextInterval',
});

export type DefaultOption = $Values<typeof DefaultOptions>;

type TimeOption = {|
  label: string,
  value: string,
|};

type Props = {|
  maxTime: string,
  minTime: string,
  defaultOption?: DefaultOption,
  timeFormat: TimeFormatType,
  timeIntervalMinutes: number,
  value?: string,
  borderless?: boolean,
  className?: string,
  disabled?: boolean,
  error?: boolean,
  menuIsOpen?: boolean,
  onBlur?: (?string) => void,
  onChange?: string => void,
  onFocus?: SyntheticFocusEventHandler<>,
  placeholder?: string,
  name?: string,
  required?: boolean,
  ...GlobalAttributes,
|};

type State = {|
  options: Array<TimeOption>,
|};

const moment24h = (value?: string): moment => moment(value, FormatTypes.timeFormat24);

const enumerateOptions = (
  start: string,
  end: string,
  intervalMinutes: number,
  timeFormat: string
): Array<TimeOption> => {
  const minTime = moment24h(start);
  const maxTime = moment24h(end);

  const timeValue = minTime.clone();
  const options = [];

  while (timeValue.isSameOrBefore(maxTime)) {
    options.push({
      value: timeValue.format(FormatTypes.timeFormat24),
      label: timeValue.format(timeFormat),
    });

    timeValue.add(intervalMinutes, 'minutes');
  }

  return options;
};

const ClockIcon = () => <span className={styles.selectClockIcon} />;

class TimePicker extends React.Component<Props, State> {
  static DefaultOptions = DefaultOptions;

  static FormatTypes = FormatTypes;

  static defaultProps = {
    minTime: '00:00',
    maxTime: '24:00',
    timeFormat: FormatTypes.timeFormat24,
    timeIntervalMinutes: 30,
    placeholder: 'Select time',
  };

  static getDerivedStateFromProps = ({
    maxTime,
    minTime,
    timeFormat,
    timeIntervalMinutes,
  }: Props) => ({
    options: enumerateOptions(minTime, maxTime, timeIntervalMinutes, timeFormat),
  });

  state = {
    options: enumerateOptions(
      this.props.minTime,
      this.props.maxTime,
      this.props.timeIntervalMinutes,
      this.props.timeFormat
    ),
  };

  getValue(value: ?string): ?string {
    if (!value) {
      return this.defaultTimeSelected();
    }

    const { maxTime, minTime } = this.props;

    const start = moment24h(minTime);
    const end = moment24h(maxTime);
    const valueMoment = moment24h(value);

    if (valueMoment.isBefore(start)) {
      return minTime;
    }

    if (valueMoment.isAfter(end)) {
      return maxTime;
    }

    return value;
  }

  handleChange = (option: TimeOption) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(option.value);
    }
  };

  handleOnBlur = (): void => {
    const { onBlur, value } = this.props;

    if (onBlur) {
      onBlur(value);
    }
  };

  defaultTimeSelected(): ?string {
    const { timeIntervalMinutes, defaultOption } = this.props;
    switch (defaultOption) {
      case TimePicker.DefaultOptions.nextInterval: {
        const roundedUp = Math.ceil(moment().minute() / timeIntervalMinutes) * timeIntervalMinutes;

        return moment()
          .minute(roundedUp)
          .second(0)
          .format(TimePicker.FormatTypes.timeFormat24);
      }
      case TimePicker.DefaultOptions.minimum:
        return moment24h(this.props.minTime).format(TimePicker.FormatTypes.timeFormat24);
      default:
        return null;
    }
  }

  render() {
    const {
      borderless,
      className,
      disabled,
      error,
      menuIsOpen,
      value,
      placeholder,
      ...rest
    } = this.props;

    const timeSelectClassName = cn(styles.selectInput, className, {
      [styles.borderless]: borderless,
      [styles.selectInputError]: error,
    });

    const currentValue = this.getValue(value);

    const currentOption = this.state.options.find(item => item.value === currentValue);

    const restProps = omit(
      rest,
      'defaultOption',
      'hidden',
      'maxTime',
      'minTime',
      'timeFormat',
      'timeIntervalMinutes',
      'title'
    );

    return (
      <ReactSelect
        {...restProps}
        menuIsOpen={menuIsOpen}
        components={{
          IndicatorSeparator: null,
          DropdownIndicator: ClockIcon,
        }}
        className={timeSelectClassName}
        classNamePrefix="time-picker"
        clearable={false}
        options={this.state.options}
        searchable={false}
        isDisabled={disabled}
        value={currentOption}
        onChange={this.handleChange}
        placeholder={placeholder}
        onBlur={this.handleOnBlur}
      />
    );
  }
}

TimePicker.displayName = 'Plasma@TimePicker';

export default TimePicker;

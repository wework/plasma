// @flow
import moment from 'moment';
import React, { type Node } from 'react';
import cn from 'classnames';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.min.css';
import style from './style.scss';
import Text from '../Text/Text';

/**
 * A TimePicker component.
 *
 * Optional 'value' must be in 24H 'HH:mm' format.
 *
 * Optional 'minTime' in 24H 'HH:mm' format, default time 08:00.
 *
 * Optional 'maxTime' in 24H 'HH:mm' format, default time 20:00.
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
 * OnChange receives string value in 24H 'HH:mm' format.
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
  minTime: string,
  maxTime: string,
  timeIntervalMinutes: number,
  timeFormat: TimeFormatType,
  disabled: boolean,
  value?: string,
  onChange: string => void,
  className?: string,
  placeholder?: string,
  defaultOption?: DefaultOption,
  transparentBackground?: boolean,
|};


class TimePicker extends React.Component<Props, State> {
  static defaultProps = {
    minTime: '08:00',
    maxTime: '20:00',
    timeFormat: FormatTypes.timeFormat12,
    timeIntervalMinutes: 30,
    disabled: false,
    placeholder: 'Select time',
  };

  getValue(value: ?string): string {
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
    return <span className={style.selectClockIcon} />;
  }

  defaultTimeSelected(): string {
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
      default:
        return moment(this.props.minTime, FormatTypes.timeFormat24).format(
          FormatTypes.timeFormat24
        );
    }
  }

  render() {
    const { className, disabled, placeholder, transparentBackground } = this.props;

    const TimeSelectClassName = cn(style.selectInput, className, {
      [style.transparentBackground]: transparentBackground,
    });

    return (
      <ReactSelect
        className={TimeSelectClassName}
        placeholder={placeholder}
        arrowRenderer={this.iconRenderer}
        clearable={false}
        searchable={false}
        options={this.getOptions()}
        onChange={this.handleChange}
        value={this.getValue(this.props.value)}
        disabled={disabled}
      />
    );
  }
}

Text.displayName = 'Plasma@TimePicker';

export default TimePicker;

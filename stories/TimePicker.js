import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TimePicker, { DefaultOptions, FormatTypes } from '../src/components/TimePicker/TimePicker';

const change = action('change');

storiesOf('TimePicker', module)
  .add('default', () => <TimePicker onChange={change} />)
  .add('disabled', () => <TimePicker onChange={change} disabled />)
  .add('transparentBackground', () => (
    <TimePicker
      timeFormat={FormatTypes.timeFormat24}
      transparentBackground
      value="14:00"
      onChange={change}
    />
  ))
  .add('24H format', () => (
    <TimePicker timeFormat={FormatTypes.timeFormat24} value="14:00" onChange={change} />
  ))
  .add('12H format', () => (
    <TimePicker timeFormat={FormatTypes.timeFormat12} value="14:00" onChange={change} />
  ))
  .add('default option minimum', () => (
    <TimePicker defaultOption={DefaultOptions.minimum} onChange={change} value="06:00" />
  ))
  .add('default option nextInterval', () => (
    <TimePicker defaultOption={DefaultOptions.nextInterval} onChange={change} />
  ));

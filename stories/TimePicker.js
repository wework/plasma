import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TimePicker from '../src/components/TimePicker/TimePicker';

storiesOf('TimePicker', module)
  .add('default', () => (
    <TimePicker onBlur={action('blurred')} onChange={action('changed')} time="20:00" />
  ))
  .add('disabled', () => (
    <TimePicker disabled onBlur={action('blurred')} onChange={action('changed')} time="20:00" />
  ));

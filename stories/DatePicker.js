import React from 'react';
import moment from 'moment';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import DatePicker from '../src/components/DatePicker/DatePicker';

storiesOf('DatePicker', module)
  .add('primary', () => (
    <DatePicker selected={moment()} onChange={() => alert('changed')} />
  ));

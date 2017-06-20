import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Select from '../src/components/Select/Select';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
];

storiesOf('Select', module)
  .add('basic', () => (
    <Select options={options} />
  ));

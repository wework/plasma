import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Select from 'react-select';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
];

storiesOf('Select', module)
  .add('basic', () => (
    <Select options={options} />
  ));

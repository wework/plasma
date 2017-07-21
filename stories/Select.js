import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Select from '../src/components/Select/Select';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
];

storiesOf('Select', module)
  .add('basic', () => (
    <Select options={options} />
  ));

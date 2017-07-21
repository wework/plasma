import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Checkbox from '../src/components/Checkbox/Checkbox';

storiesOf('Checkbox', module)
  .add('default', () => (
    <Checkbox />
  ))
  .add('checked', () => (
    <Checkbox checked />
  ))
  .add('unchecked', () => (
    <Checkbox checked={false} />
  ))
  .add('indeterminate unchecked', () => (
    <Checkbox indeterminate />
  ))
  .add('indeterminate checked', () => (
    <Checkbox indeterminate checked />
  ));

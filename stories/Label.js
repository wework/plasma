import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Label from '../src/components/Label/Label';

storiesOf('Label', module).add('primary', () => <Label text="A label" />);

storiesOf('Label', module).add('secondary', () => (
  <Label type="secondary" text="A secondary label" />
));

storiesOf('Label', module).add('disabled', () => (
  <Label type="disabled" text="A disabled label" />
));

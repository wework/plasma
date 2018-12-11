import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Label from '../src/components/Label/Label';

storiesOf('Label', module).add('primary', () => <Label text="A label" />);

storiesOf('Label', module).add('secondary', () => (
  <Label type="secondary" text="A secondary label" />
));

storiesOf('Label', module).add('disabled', () => <Label type="disabled" text="A disabled label" />);

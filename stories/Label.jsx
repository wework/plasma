import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '../src/components/Label/Label';
import TextInput from '../src/components/TextInput/TextInput';

const stories = storiesOf('Label', module);

stories.add('default', () => (
  <Label>Label</Label>
));

stories.add('with input', () => (
  <div>
    <Label htmlFor="text">Label</Label>
    <TextInput id="text" />
  </div>
));

stories.add('required', () => (
  <div>
    <Label required htmlFor="text">Label</Label>
    <TextInput id="text" />
  </div>
));

stories.add('disabled', () => (
  <div>
    <Label disabled htmlFor="text">Label</Label>
    <TextInput id="text" disabled />
  </div>
));

stories.add('inline', () => (
  <div>
    <Label htmlFor="text" inline>Label</Label>
    <TextInput id="text" style={{ display: 'inline-block', width: '30em' }} />
  </div>
));

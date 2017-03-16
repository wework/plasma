import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TextInput from '../src/components/TextInput/TextInput';

storiesOf('TextInput', module).add('default', () => (
  <TextInput onChange={action('changed')} />
));

storiesOf('TextInput', module).add('custom placeholder', () => (
  <TextInput placeholder="Custom placeholder..." onChange={action('changed')} />
));

storiesOf('TextInput', module).add('disabled', () => (
  <TextInput isDisabled onChange={action('changed')} />
));

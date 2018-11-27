import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PhoneInput from '../src/components/PhoneInput/PhoneInput';

const stories = storiesOf('PhoneInput', module);

const defaultProps = {
  onChange: action('changed'),
  onCountryChange: action('country changed'),
};

stories.add('default', () => <PhoneInput {...defaultProps} />);

stories.add('disabled', () => <PhoneInput {...defaultProps} disabled />);

stories.add(
  'error',
  () => <PhoneInput {...defaultProps} error="Some kind of error." />
);

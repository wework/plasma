import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FormField from '../src/components/layout/FormField/FormField';
import TextInput from '../src/components/TextInput/TextInput';
import NumberInput from '../src/components/NumberInput/NumberInput';

const stories = storiesOf('FormField', module);

const defaultProps = {
  component: TextInput,
  onChange: action('changed'),
};

stories.add('default', () => (
  <FormField
    {...defaultProps}
  />
));

stories.add('label', () => (
  <FormField
    {...defaultProps}
    label="Charlie don't surf"
  />
));

stories.add('hint', () => (
  <FormField
    {...defaultProps}
    label="Charlie don't surf"
    hint="Boo."
  />
));

stories.add('inline', () => (
  <FormField
    {...defaultProps}
    label="Inline label"
    hint="This is a hint"
    inline
  />
));

stories.add('required', () => (
  <FormField
    {...defaultProps}
    label="Tacos"
    required
  />
));

stories.add('disabled', () => (
  <FormField
    {...defaultProps}
    label="Disabled"
    disabled
  />
));

stories.add('with error message', () => (
  <FormField
    {...defaultProps}
    label="Error"
    errorMessage="Required"
    error
  />
));

stories.add('NumberInput with error message', () => (
  <FormField
    {...defaultProps}
    component={NumberInput}
    label="Error"
    errorMessage="Required"
    error
  />
));

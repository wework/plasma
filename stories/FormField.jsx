// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FormField from '../src/components/layout/FormField/FormField';
import TextInput from '../src/components/TextInput/TextInput';
import NumberInput from '../src/components/NumberInput/NumberInput';

const stories = storiesOf('FormField', module);

stories.add('default', () => (
  <FormField
    component={TextInput}
    onChange={action('changed')}
  />
));

stories.add('label', () => (
  <FormField
    component={TextInput}
    onChange={action('changed')}
    label="Charlie don't surf"
  />
));

stories.add('hint', () => (
  <FormField
    component={TextInput}
    onChange={action('changed')}
    label="Charlie don't surf"
    hint="Boo."
  />
));

stories.add('inline', () => (
  <FormField
    component={TextInput}
    onChange={action('changed')}
    label="Inline label"
    hint="This is a hint"
    inline
  />
));

stories.add('required', () => (
  <FormField
    component={TextInput}
    onChange={action('changed')}
    label="Tacos"
    required
  />
));

stories.add('disabled', () => (
  <FormField
    component={TextInput}
    onChange={action('changed')}
    label="Disabled"
    disabled
  />
));

stories.add('with error message', () => (
  <FormField
    component={TextInput}
    onChange={action('changed')}
    label="Error"
    errorMessage="Required"
    error
  />
));

stories.add('NumberInput with error message', () => (
  <FormField
    component={NumberInput}
    onChange={action('changed')}
    label="Error"
    errorMessage="Required"
    error
  />
));

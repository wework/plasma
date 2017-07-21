import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import FormField from '../src/components/layout/FormField/FormField';
import TextInput from '../src/components/TextInput/TextInput';

storiesOf('FormField', module).add('default', () => (
  <FormField>
    <TextInput />
  </FormField>
));

storiesOf('FormField', module).add('label', () => (
  <FormField label="Charlie don't surf">
    <TextInput />
  </FormField>
));

storiesOf('FormField', module).add('isRequired', () => (
  <FormField isRequired label="Tacos">
    <TextInput />
  </FormField>
));

storiesOf('FormField', module).add('isDisabled', () => (
  <FormField isDisabled>
    <TextInput isDisabled />
  </FormField>
));

storiesOf('FormField', module).add('with errorMessage', () => (
  <FormField isDisabled displayError errorMessage="Required">
    <TextInput isDisabled error/>
  </FormField>
));

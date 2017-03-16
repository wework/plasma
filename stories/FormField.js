import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import FormField from '../src/components/layout/FormField/FormField';
import TextInput from '../src/components/TextInput/TextInput';

storiesOf('FormField', module).add('default', () => (
  <FormField>
    <TextInput />
  </FormField>
));

storiesOf('FormField', module).add('isRequired', () => (
  <FormField isRequired>
    <TextInput />
  </FormField>
));

storiesOf('FormField', module).add('isDisabled', () => (
  <FormField isDisabled>
    <TextInput isDisabled />
  </FormField>
));

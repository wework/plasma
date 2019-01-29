import React from 'react';
import { storiesOf } from '@storybook/react';
import Hint from '../src/components/Hint/Hint';
import TextInput from '../src/components/TextInput/TextInput';

const stories = storiesOf('Hint', module);

stories.add('default', () => (
  <Hint>Hint</Hint>
));

stories.add('with input', () => (
  <div>
    <TextInput />
    <Hint>Hint</Hint>
  </div>
));
stories.add('disabled', () => (
  <div>
    <TextInput disabled />
    <Hint disabled>Hint: Disabled</Hint>
  </div>
));

stories.add('error', () => (
  <div>
    <TextInput error />
    <Hint error>Hint: An error has occurred</Hint>
  </div>
));

stories.add('link', () => (
  <div>
    <TextInput />
    <Hint>
      <a href="https://plasma.guide">Link to https://plasma.guide</a>
    </Hint>
  </div>
));

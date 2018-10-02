import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput from '../src/components/TextInput/TextInput';
import withCounter from '../src/decorators/withCounter/withCounter';
import StoryState from '../StoryState';

const TextInputWithCounter = withCounter(TextInput);

const stories = storiesOf('TextInput', module);

stories.add('default', () => <TextInput onChange={action('changed')} />);

stories.add('custom placeholder', () => (
  <TextInput placeholder="Custom placeholder..." onChange={action('changed')} />
));

stories.add('prefix', () => (
  <TextInput onChange={action('changed')} prefix="$" />
));

stories.add('suffix', () => (
  <TextInput onChange={action('changed')} suffix=".com" />
));

stories.add('disabled placeholder', () => (
  <TextInput disabled onChange={action('changed')} />
));

stories.add('disabled filled', () => (
  <TextInput disabled onChange={action('changed')} value="Queen of hearts" />
));

stories.add('disabled prefix', () => (
  <TextInput disabled prefix="$" onChange={action('changed')} value="Queen of hearts" />
));

stories.add('disabled suffix', () => (
  <TextInput disabled suffix=".com" onChange={action('changed')} value="Queen of hearts" />
));

stories.add('error', () => <TextInput error onChange={action('changed')} />);

stories.add('suffix error', () => (
  <TextInput suffix=".com" error onChange={action('changed')} />
));

stories.add('prefix error', () => (
  <TextInput prefix="$" error onChange={action('changed')} />
));

stories.add('large', () => (
  <TextInput size="large" onChange={action('changed')} />
));

stories.add('large prefix', () => (
  <TextInput prefix="http://" size="large" onChange={action('changed')} />
));

stories.add('clipping parent', () => (
  <div>
    <div style={{ overflow: 'hidden', width: 100, height: 100 }}>
      <TextInput />
    </div>
  </div>
));

stories.add('max length', () => (
  <TextInput maxLength="10" onChange={action('changed')} />
));

stories.add('with counter', () => (
  <StoryState
    render={(state, setState) => (
      <TextInputWithCounter
        placeholder="Should show a counter"
        onChange={e => setState({ text: e.target.value })}
        value={state.text}
      />
    )}
  />
));

stories.add('with counter and maxLength', () => (
  <StoryState
    render={(state, setState) => (
      <TextInputWithCounter
        placeholder="Should show a counter and have max length"
        maxLength="20"
        onChange={e => setState({ text: e.target.value })}
        value={state.text}
      />
    )}
  />
));

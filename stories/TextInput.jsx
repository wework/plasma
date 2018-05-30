import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput from '../src/components/TextInput/TextInput';
import withCounter from '../src/decorators/withCounter/withCounter';
import StoryState from '../StoryState';

const TextInputWithCounter = withCounter(TextInput);

storiesOf('TextInput', module).add('default', () => <TextInput onChange={action('changed')} />);

storiesOf('TextInput', module).add('custom placeholder', () => (
  <TextInput placeholder="Custom placeholder..." onChange={action('changed')} />
));

storiesOf('TextInput', module).add('prefix', () => (
  <TextInput onChange={action('changed')} prefix="$" />
));

storiesOf('TextInput', module).add('suffix', () => (
  <TextInput onChange={action('changed')} suffix=".com" />
));

storiesOf('TextInput', module).add('disabled placeholder', () => (
  <TextInput disabled onChange={action('changed')} />
));

storiesOf('TextInput', module).add('disabled filled', () => (
  <TextInput disabled onChange={action('changed')} value="Queen of hearts" />
));

storiesOf('TextInput', module).add('disabled prefix', () => (
  <TextInput disabled prefix="$" onChange={action('changed')} value="Queen of hearts" />
));

storiesOf('TextInput', module).add('disabled suffix', () => (
  <TextInput disabled suffix=".com" onChange={action('changed')} value="Queen of hearts" />
));

storiesOf('TextInput', module).add('error', () => <TextInput error onChange={action('changed')} />);

storiesOf('TextInput', module).add('suffix error', () => (
  <TextInput suffix=".com" error onChange={action('changed')} />
));

storiesOf('TextInput', module).add('prefix error', () => (
  <TextInput prefix="$" error onChange={action('changed')} />
));

storiesOf('TextInput', module).add('large', () => (
  <TextInput size="large" onChange={action('changed')} />
));

storiesOf('TextInput', module).add('large prefix', () => (
  <TextInput prefix="http://" size="large" onChange={action('changed')} />
));

storiesOf('TextInput', module).add('clipping parent', () => (
  <div>
    <div style={{ overflow: 'hidden', width: 100, height: 100 }}>
      <TextInput />
    </div>
  </div>
));

storiesOf('TextInput', module).add('max length', () => (
  <TextInput maxLength="10" onChange={action('changed')} />
));

storiesOf('TextInput', module).add('with counter', () => (
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

storiesOf('TextInput', module).add('with counter and maxLength', () => (
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

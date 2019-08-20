import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput from '../src/components/TextInput/TextInput';
import withCounter from '../src/decorators/withCounter/withCounter';
import StoryState from '../StoryState';

const TextInputWithCounter = withCounter(TextInput);

storiesOf('TextInput', module)
  .add('default', () => <TextInput onChange={action('changed')} />)
  .add('custom placeholder', () => (
    <TextInput placeholder="Custom placeholder..." onChange={action('changed')} />
  ))
  .add('prefix', () => <TextInput onChange={action('changed')} prefix="$" />)
  .add('suffix', () => <TextInput onChange={action('changed')} suffix=".com" />)
  .add('prefix and suffix', () => (
    <TextInput onChange={action('changed')} prefix="https://" suffix=".com" />
  ))
  .add('disabled placeholder', () => <TextInput disabled onChange={action('changed')} />)
  .add('disabled filled', () => (
    <TextInput disabled onChange={action('changed')} value="Queen of hearts" />
  ))
  .add('disabled prefix', () => (
    <TextInput disabled prefix="$" onChange={action('changed')} value="Queen of hearts" />
  ))
  .add('disabled suffix', () => (
    <TextInput disabled suffix=".com" onChange={action('changed')} value="Queen of hearts" />
  ))
  .add('disabled prefix and suffix', () => (
    <TextInput disabled onChange={action('changed')} prefix="https://" suffix=".com" />
  ))
  .add('error', () => <TextInput error onChange={action('changed')} />)
  .add('suffix error', () => <TextInput suffix=".com" error onChange={action('changed')} />)
  .add('prefix error', () => <TextInput prefix="$" error onChange={action('changed')} />)
  .add('prefix and suffix error', () => (
    <TextInput prefix="https://" suffix=".com" error onChange={action('changed')} />
  ))
  .add('clipping parent', () => (
    <div>
      <div style={{ overflow: 'hidden', width: 100, height: 100 }}>
        <TextInput />
      </div>
    </div>
  ))
  .add('max length', () => <TextInput maxLength="10" onChange={action('changed')} />)
  .add('with counter', () => (
    <StoryState
      render={(state, setState) => (
        <TextInputWithCounter
          placeholder="Should show a counter"
          onChange={e => setState({ text: e.target.value })}
          value={state.text}
        />
      )}
    />
  ))
  .add('with counter and maxLength', () => (
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

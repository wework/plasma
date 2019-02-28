import React from 'react';
import { storiesOf } from '@storybook/react';
import 'react-select/dist/react-select.css';
import TimePicker, { DefaultOptions, FormatTypes } from '../src/components/TimePicker/TimePicker';
import StoryState from '../StoryState';

storiesOf('TimePicker', module)
  .add('default', () => (
    <StoryState
      render={(state, setState) => (
        <TimePicker value={state.value} onChange={value => setState({ value })} />
      )}
    />
  ))
  .add('disabled', () => (
    <StoryState
      render={(state, setState) => (
        <TimePicker value={state.value} onChange={value => setState({ value })} disabled />
      )}
    />
  ))
  .add('error', () => (
    <StoryState
      render={(state, setState) => (
        <TimePicker
          defaultOption={DefaultOptions.nextInterval}
          onChange={value => setState({ value })}
          value={state.value}
          error
        />
      )}
    />
  ))
  .add('borderless', () => (
    <StoryState
      render={(state, setState) => (
        <TimePicker
          borderless
          value={state.value || '14:00'}
          onChange={value => setState({ value })}
        />
      )}
    />
  ))
  .add('24H format', () => (
    <StoryState
      render={(state, setState) => (
        <TimePicker
          timeFormat={FormatTypes.timeFormat24}
          defaultOption={DefaultOptions.nextInterval}
          value={state.value || '14:00'}
          onChange={value => setState({ value })}
        />
      )}
    />
  ))
  .add('12H format', () => (
    <StoryState
      render={(state, setState) => (
        <TimePicker
          timeFormat={FormatTypes.timeFormat12}
          value={state.value || '14:00'}
          onChange={value => setState({ value })}
        />
      )}
    />
  ))
  .add('default option minimum', () => (
    <StoryState
      render={(state, setState) => (
        <TimePicker
          defaultOption={DefaultOptions.minimum}
          onChange={value => setState({ value })}
          value={state.value}
        />
      )}
    />
  ))
  .add('default option nextInterval', () => (
    <StoryState
      render={(state, setState) => (
        <TimePicker
          defaultOption={DefaultOptions.nextInterval}
          onChange={value => setState({ value })}
          value={state.value}
        />
      )}
    />
  ));

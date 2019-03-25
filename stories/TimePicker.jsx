import React from 'react';
import { storiesOf } from '@storybook/react';
import TimePicker from '../src/components/TimePicker/TimePicker';
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
          defaultOption={TimePicker.DefaultOptions.nextInterval}
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
          timeFormat={TimePicker.FormatTypes.timeFormat24}
          defaultOption={TimePicker.DefaultOptions.nextInterval}
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
          timeFormat={TimePicker.FormatTypes.timeFormat12}
          value={state.value || '14:00'}
          onChange={value => setState({ value })}
        />
      )}
    />
  ))
  .add('15 minute intervals', () => (
    <StoryState
      render={(state, setState) => (
        <TimePicker
          timeIntervalMinutes={15}
          onChange={value => setState({ value })}
          timeFormat={TimePicker.FormatTypes.timeFormat12}
        />
      )}
    />
  ))
  .add('default option minimum', () => (
    <StoryState
      render={(state, setState) => (
        <TimePicker
          defaultOption={TimePicker.DefaultOptions.minimum}
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
          defaultOption={TimePicker.DefaultOptions.nextInterval}
          onChange={value => setState({ value })}
          value={state.value}
        />
      )}
    />
  ));

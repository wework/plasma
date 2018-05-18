import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from '../src/components/TextArea/TextArea';
import withCounter from '../src/decorators/withCounter/withCounter';
import StoryState from '../StoryState';

const TextAreaWithCounter = withCounter(TextArea);

storiesOf('TextArea', module)
  .add('with error', () => (
    <div>
      <TextArea error placeholder="Type a note..." />
    </div>
  ))
  .add('disabled', () => (
    <div>
      <TextArea disabled placeholder="Type a note..." />
    </div>
  ))
  .add('without autosize', () => (
    <div>
      <TextArea placeholder="Type a note..." autosize={false} />
    </div>
  ))
  .add('maxLength', () => (
    <div>
      <TextArea maxLength="10" placeholder="Max length of 10" />
    </div>
  ))
  .add('withCounter', () => (
    <div>
      <StoryState
        render={(state, setState) => (
          <TextAreaWithCounter
            placeholder="Should show a counter"
            onChange={e => setState({ text: e.target.value })}
            value={state.text}
          />
        )}
      />
    </div>
  ))
  .add('withCounter and maxLength', () => (
    <div>
      <StoryState
        render={(state, setState) => (
          <TextAreaWithCounter
            maxLength="20"
            placeholder="Should show a counter and have a max length"
            onChange={e => setState({ text: e.target.value })}
            value={state.text}
          />
        )}
      />
    </div>
  ));

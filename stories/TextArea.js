import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import TextArea from '../src/components/TextArea/TextArea';

storiesOf('TextArea', module)
  .add('with div below', () => (
    <div>
      <TextArea placeholder="Type a note..." />
      <div>Another thing</div>
    </div>
  ))
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
  .add('maxLength', () => (
    <div>
      <TextArea maxLength="10" placeholder="Max length of 10" />
    </div>
  ))
  .add('withCounter', () => (
    <div>
      <TextArea withCounter placeholder="Should show a counter" />
    </div>
  ))
  .add('withCounter and initial value', () => (
    <div>
      <TextArea withCounter placeholder="Should show a counter" value="foo bar" />
    </div>
  ))
  .add('withCounter and maxLength', () => (
    <div>
      <TextArea
        withCounter
        maxLength="20"
        placeholder="Should show a counter and have a max length"
      />
    </div>
  ));

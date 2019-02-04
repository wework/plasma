import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import StoryState from '../StoryState';
import Checkbox from '../src/components/Checkbox/Checkbox';

const change = action('change');

storiesOf('Checkbox', module)
  .add('default', () => (
    <StoryState
      render={(state, setState) => (
        <Checkbox
          onChange={evt => {
            setState({ checked: !state.checked });
            change(evt);
          }}
        >
          Option
        </Checkbox>
      )}
    />
  ))
  .add('checked', () => <Checkbox checked>Option</Checkbox>)
  .add('unchecked', () => <Checkbox checked={false}>Option</Checkbox>)
  .add('disabled', () => <Checkbox disabled>Option</Checkbox>)
  .add('disabled checked', () => (
    <Checkbox disabled checked>
      Option
    </Checkbox>
  ))
  .add('error', () => <Checkbox error>Option</Checkbox>)
  .add('error checked', () => (
    <Checkbox error checked>
      Option
    </Checkbox>
  ));

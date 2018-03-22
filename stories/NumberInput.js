import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import NumberInput from '../src/components/NumberInput/NumberInput';
import StoryState from '../StoryState'

storiesOf('NumberInput', module)
  .add('numberInput', () =>(
    <StoryState render={(state, setState) => (
        <NumberInput
          step={1}
          onChange={value => setState({ qty: value })}
          value={state.qty | 0}
        />
      )}
    />
  ))
  .add('disabled numberInput', () => (
    <NumberInput
      minValue={1}
      maxValue={10}
      step={1}
      value={1}
      onChange={()=>{}}
      disabled
    />
  ))
  .add('error numberInput', () => (
    <NumberInput
      minValue={1}
      maxValue={10}
      step={1}
      value={1}
      onChange={()=>{}}
      error
    />
  ))

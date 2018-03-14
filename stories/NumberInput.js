import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import NumberInput from '../src/components/NumberInput/NumberInput';


storiesOf('NumberInput', module)
  .add('numberInput', () =>(
    <NumberInput
      minValue={1}
      maxValue={10}
      step={1}
      value={1}
      onChange={()=>{}}
      onBlur={()=>{}}
      onPressIncrement={()=>{}}
      onPressDecrement={()=>{}}
    />
  ))
  .add('disabled numberInput', () => (
    <NumberInput
      minValue={1}
      maxValue={10}
      step={1}
      value={1}
      onChange={()=>{}}
      onPressIncrement={()=>{}}
      onPressDecrement={()=>{}}
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
      onPressIncrement={()=>{}}
      onPressDecrement={()=>{}}
      error
    />
  ))

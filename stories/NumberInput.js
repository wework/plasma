import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import NumberInput from '../src/components/NumberInput/NumberInput';


storiesOf('NumberInput', module).add('numberinput', () =>(
  <NumberInput
    minValue={1}
    maxValue={10}
    step={1}
    value={1}
    onChange={()=>{}}
    onPressIncrement={()=>{}}
    onPressDecrement={()=>{}}
  />
));

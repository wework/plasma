import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import NumberInput from '../src/components/NumberInput/NumberInput';
import style from '../src/components/NumberInput/example.scss';

storiesOf('NumberInput', module).add('numberinput', () =>(
  <NumberInput 
		minValue={1}
		maxValue={10} 
		step={1}
		value={1}
    onChange={()=>{}} 
    onPressIncrement={()=>{}}
    onPressDecrement={()=>{}}
    wrapperClass={style.customWrapperClass}
  />
));
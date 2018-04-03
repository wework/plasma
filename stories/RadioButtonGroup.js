import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import StoryState from '../StoryState'
import RadioButtonGroup from '../src/components/RadioButtonGroup/RadioButtonGroup';

const options = [
  { value: "a", label: "option a" },
  { value: "b", label: "option b" },
  { value: "c", label: "option c" },
];

storiesOf('RadioButtonGroup', module)
  .add('plain group', () => (
    <StoryState render={(state, setState)=>(
        <RadioButtonGroup
          name="story buttons"
          options={options}
          onChange={e => setState({selected: e.target.value})}
          value={state.selected}
        />
    )}/>
  ))
  .add('fancy group', () => (
    <StoryState render={(state, setState)=>(
        <RadioButtonGroup
          name="story buttons"
          options={options}
          onChange={e => setState({selected: e.target.value})}
          fancy
          value={state.selected}
        />
    )}/>
  ))

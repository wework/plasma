import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryState from '../StoryState';
import Checkbox from '../src/components/Checkbox/Checkbox';

storiesOf('Checkbox', module)
  .add('default', () => (
    <Checkbox />
  ))
  .add('with description', () => (
    <Checkbox description={'Hint: this is some text.'} />
  ))
  .add('checked', () => (
    <Checkbox checked />
  ))
  .add('unchecked', () => (
    <Checkbox checked={false} />
  ))
  .add('indeterminate unchecked', () => (
    <Checkbox indeterminate />
  ))
  .add('indeterminate checked', () => (
    <Checkbox indeterminate checked />
  ))
  .add('fancy', () => (
    <StoryState render={(state, setState) => (
      <Checkbox
        fancy
        name="optionOne"
        onChange={e => setState({selected: e.target.name})}
        value={state.selected === 'optionOne'}
      />
    )}
    />
  ));

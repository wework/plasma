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
        checked={state.selected === 'optionOne'}
      />
    )}
    />
  ))
  .add('multiple fancy', () => (
    <div>
      <StoryState render={(state, setState) => (
        <Checkbox
          fancy
          name="dog"
          onChange={e => setState({selected: e.target.name})}
          text="Dog"
          checked={state.selected === 'dog'}
        />
      )}
      />
      <StoryState render={(state, setState) => (
        <Checkbox
          fancy
          name="cat"
          onChange={e => setState({selected: e.target.name})}
          text="Cat"
          checked={state.selected === 'cat'}
        />
      )}
      />
      <StoryState render={(state, setState) => (
        <Checkbox
          fancy
          name="snake"
          onChange={e => setState({selected: e.target.name})}
          text="Snake"
          checked={state.selected === 'snake'}
        />
      )}
      />
      <StoryState render={(state, setState) => (
        <Checkbox
          fancy
          name="bird"
          onChange={e => setState({selected: e.target.name})}
          text="Bird"
          checked={state.selected === 'bird'}
        />
      )}
      />
    </div>
  ));
;

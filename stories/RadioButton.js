import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryState from '../StoryState';
import RadioButton from '../src/components/RadioButton/RadioButton';
import meetupLogo from '../src/icons/meetupLogo';

storiesOf('RadioButton', module)
  .add('with Text', () => <RadioButton text="Text" />)
  .add('with Text and Description', () => (
    <RadioButton text="Text" description="This is a short description for RadioButton" />
  ))
  .add('with Text and Description and isLarge', () => (
    <RadioButton text="Text" isLarge description="This is a short description for RadioButton" />
  ))
  .add('with Text and Long Description and isLarge', () => (
    <RadioButton
      text="Text"
      isLarge
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam sem. Quisque mollis pulvinar metus eget dignissim. Pellentesque ac neque magna. Vivamus vel sapien lectus. Ut at aliquet urna. Proin volutpat odio sed diam maximus tristique. Ut pellentesque venenatis nisi, in faucibus risus feugiat at. Pellentesque consectetur auctor mollis. Morbi neque nulla, suscipit at leo suscipit, vestibulum tristique metus. Curabitur volutpat consectetur risus, nec commodo eros placerat interdum. Sed eget mi mi. Quisque eget pharetra dui, eu accumsan dui. Nullam non lacinia odio, ac pellentesque metus. Nulla purus metus, elementum eu tristique at, interdum sed urna. Vivamus vulputate enim ac orci lacinia elementum."
    />
  ))
  .add('multiple', () => (
    <div>
      <RadioButton text="One" description="This is the first RadioButton" />
      <RadioButton text="Two" description="This is the second RadioButton" />
    </div>
  ))
  .add('fancy with optional icon', () => (
    <StoryState
      render={(state, setState) => (
        <div>
          <RadioButton
            text="Happy Hour"
            fieldValue="Happy Hour"
            fancy
            onChange={e => setState({ selected: e.target.value })}
            value={state.selected}
          />
          <RadioButton
            text="Networking"
            fieldValue="Networking"
            fancy
            onChange={e => setState({ selected: e.target.value })}
            value={state.selected}
          />
          <RadioButton
            text="Wellness"
            fieldValue="Wellness"
            fancy
            onChange={e => setState({ selected: e.target.value })}
            value={state.selected}
          />
          <RadioButton
            text="TGIM"
            fieldValue="TGIM"
            fancy
            onChange={e => setState({ selected: e.target.value })}
            value={state.selected}
          />
          <RadioButton
            text="Lunch and Learn"
            fieldValue="Lunch and Learn"
            fancy
            onChange={e => setState({ selected: e.target.value })}
            value={state.selected}
          />
          <RadioButton
            text="Meetup"
            fieldValue="Meetup"
            fancy
            icon={meetupLogo}
            onChange={e => setState({ selected: e.target.value })}
            value={state.selected}
          />
          <RadioButton
            text="Community Event"
            fieldValue="Community Event"
            fancy
            onChange={e => setState({ selected: e.target.value })}
            value={state.selected}
          />
        </div>
      )}
    />
  ));

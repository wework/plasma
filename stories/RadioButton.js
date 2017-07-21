import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import RadioButton from '../src/components/RadioButton/RadioButton';

storiesOf('RadioButton', module)
  .add('with Text', () => (
    <RadioButton text="Text" />
  ))
  .add('with Text and Description', () => (
    <RadioButton text="Text" description="This is a short description for RadioButton" />
  ))
  .add('with Text and Description and isLarge', () => (
    <RadioButton text="Text" isLarge description="This is a short description for RadioButton" />
  ))
  .add('with Text and Long Description and isLarge', () => (
    <RadioButton text="Text" isLarge description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam sem. Quisque mollis pulvinar metus eget dignissim. Pellentesque ac neque magna. Vivamus vel sapien lectus. Ut at aliquet urna. Proin volutpat odio sed diam maximus tristique. Ut pellentesque venenatis nisi, in faucibus risus feugiat at. Pellentesque consectetur auctor mollis. Morbi neque nulla, suscipit at leo suscipit, vestibulum tristique metus. Curabitur volutpat consectetur risus, nec commodo eros placerat interdum. Sed eget mi mi. Quisque eget pharetra dui, eu accumsan dui. Nullam non lacinia odio, ac pellentesque metus. Nulla purus metus, elementum eu tristique at, interdum sed urna. Vivamus vulputate enim ac orci lacinia elementum." />
  ))  
  .add('multiple', () => (
    <div>
      <RadioButton text="One" description="This is the first RadioButton" />
      <RadioButton text="Two" description="This is the second RadioButton" />
    </div>
  ));

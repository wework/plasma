import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../src/components/Text/Text';

storiesOf('Text', module)
  .add('default', () => (
    <Text>
      Well-wishers offer food, drink and cheers as more than 125 educators travel 110 miles to seek
      better funding.
    </Text>
  ))
  .add('large', () => (
    <Text large>
      Well-wishers offer food, drink and cheers as more than 125 educators travel 110 miles to seek
      better funding
    </Text>
  ))
  .add('secondary', () => (
    <Text type="secondary">
      Well-wishers offer food, drink and cheers as more than 125 educators travel 110 miles to seek
      better funding
    </Text>
  ));

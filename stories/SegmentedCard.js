import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import SegmentedCard from '../src/components/SegmentedCard/SegmentedCard';

storiesOf('SegmentedCard', module)
  .add('regular', () => (
    <SegmentedCard>
      <div>First section</div>
      <div>Second section</div>
    </SegmentedCard>
  ))
  .add('vertical', () => (
    <SegmentedCard vertical>
      <div>First section</div>
      <div>Second section</div>
    </SegmentedCard>
  ));

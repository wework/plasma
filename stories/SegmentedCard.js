import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import SegmentedCard from '../src/components/SegmentedCard/SegmentedCard';

storiesOf('SegmentedCard', module)
  .add('regular', () => (
    <SegmentedCard>
      <div>
        First section
      </div>
      <div>
        Second section
      </div>
    </SegmentedCard>
  ))
  .add('vertical', () => (
    <SegmentedCard vertical>
      <div>
        First section
      </div>
      <div>
        Second section
      </div>
    </SegmentedCard>
  ));



import React from 'react';
import { storiesOf } from '@storybook/react';
import CollapsibleCard from '../src/components/CollapsibleCard/CollapsibleCard';

storiesOf('CollapsibleCard', module)
  .add('default', () => (
    <div style={{ display: 'flex' }}>
      <CollapsibleCard
        headerText="Header Text"
      >
        Hello
      </CollapsibleCard>
    </div>
  ))
  .add('expandable text', () => (
    <div style={{ display: 'flex' }}>
      <CollapsibleCard
        headerText="Header Text"
        expandableText="more"
      >
        Hello
      </CollapsibleCard>
    </div>
  ))
  .add('is collapsed', () => (
    <div style={{ display: 'flex' }}>
      <CollapsibleCard
        headerText="Header Text"
        isCollapsed
      >
        Hello
      </CollapsibleCard>
    </div>
  ))
  .add('red style color', () => (
    <div style={{ display: 'flex' }}>
      <CollapsibleCard
        headerText="Header Text"
        styleColor="red"
      >
        Hello
      </CollapsibleCard>
    </div>
  ))
  .add('disabled', () => (
    <div style={{ display: 'flex' }}>
      <CollapsibleCard
        headerText="Header Text"
        disabled
      >
        Hello
      </CollapsibleCard>
    </div>
  ));

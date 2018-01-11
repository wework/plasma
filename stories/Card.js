/* eslint-disable */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Card from '../src/components/Card/Card';

storiesOf('Card', module)
  .add('default', () => (
    <div style={{ display: 'flex' }}>
      <Card>Hello</Card>
    </div>
  ))
  .add('min width', () => (
    <div style={{ display: 'flex' }}>
      <Card minWidth={200}>Hello</Card>
    </div>
  ))
  .add('condensed min width', () => (
    <div style={{ display: 'flex' }}>
      <Card type="condensed" minWidth={200}>Hello</Card>
    </div>
  ));

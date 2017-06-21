import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Page from '../src/components/layout/Page/Page';

storiesOf('Page', module)
  .add('with title', () => (
    <Page title="Chelsea">
      <p>This is the body</p>
    </Page>
  ));

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Page from '../src/components/layout/Page/Page';
import Button from '../src/components/Button/Button';

storiesOf('Page', module)
  .add('with title', () => (
    <Page title="Chelsea">
      <p>This is the body</p>
    </Page>
  ))
  .add('with title and actions', () => {
    const buyAction = <Button>Checkout</Button>;
    const editAction = <Button>Edit</Button>;
    const actions = [buyAction, editAction];
    return (
      <Page title="Chelsea" actions={actions}>
        <p>This is the body</p>
      </Page>
    );
  });

import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../src/components/Text/Text';

storiesOf('Text', module)
  .add('default', () =>
    <Text/>
  )
  .add('large', () =>
    <Text large/>
  )
  .add('secondary', () =>
    <Text type="secondary"/>
  )

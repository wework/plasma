import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import OverflowMenu from '../src/components/OverflowMenu/OverflowMenu';

const options = [
  { key: 'bury', text: 'Bury' },
  { key: 'marry', text: 'Marry' },
  { key: 'screw', text: 'Screw' },
];

storiesOf('OverflowMenu', module)
  .add('default', () => (
    <OverflowMenu
      options={options}
      onClick={action('clicked')}
    />
  ));

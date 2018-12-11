import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import OverflowMenu from '../src/components/OverflowMenu/OverflowMenu';

const options = [
  { key: 'bury', text: 'Bury' },
  { key: 'marry', text: 'Marry' },
  { key: 'screw', text: 'Screw' },
];

storiesOf('OverflowMenu', module)
  .add('default', () => <OverflowMenu options={options} onClick={action('clicked')} />)
  .add('open left', () => (
    <div style={{ float: 'right' }}>
      <OverflowMenu openDirection="left" options={options} onClick={action('clicked')} />
    </div>
  ));

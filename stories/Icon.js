import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Icon from '../src/components/Icon/Icon';
import locationPin from '../src/icons/locationPin';

storiesOf('Icon', module).add('default', () => (
  <Icon icon={locationPin} color="blue" />
));

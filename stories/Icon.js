import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from '../src/components/Icon/Icon';
import locationPin from '../src/icons/locationPin';

storiesOf('Icon', module).add('default', () => (
  <Icon icon={locationPin} color="blue" />
));

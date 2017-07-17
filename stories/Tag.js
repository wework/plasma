import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Tag from '../src/components/Tag/Tag';

storiesOf('Tag', module).add('default', () => (
  <Tag text="wework" />
));

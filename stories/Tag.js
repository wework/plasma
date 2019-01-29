import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Tag from '../src/components/Tag/Tag';

storiesOf('Tag', module).add('default', () => <Tag text="wework" />);

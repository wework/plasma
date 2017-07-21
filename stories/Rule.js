import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Rule from '../src/components/Rule/Rule';

storiesOf('Rule', module).add('solid', () => <Rule type="solid" />);
storiesOf('Rule', module).add('dashed', () => <Rule type="dashed" />);

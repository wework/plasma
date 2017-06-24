import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Rule from '../src/components/Rule/Rule';

storiesOf('Rule', module).add('solid', () => <Rule type="solid" />);
storiesOf('Rule', module).add('dashed', () => <Rule type="dashed" />);

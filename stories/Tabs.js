import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Tabs from '../src/components/Tabs/Tabs';

storiesOf('Tabs', module)
  .add('one tab', () => (
    <Tabs items={['Hello']} />
  ))
  .add('two tabs', () => (
    <Tabs items={['Hello', 'World']} />
  ))
  .add('three tabs', () => (
    <Tabs items={['Hello', 'World', 'Bye Bye']} />
  ))
  .add('five tabs', () => (
    <Tabs items={['Hello', 'World', 'Bye Bye', 'привет', '你好']} />
  ))
  .add('with onClick', () => (
    <Tabs items={['Hello', 'World']} onClick={ (index) => alert('clicked tab #' + index) } />
  ));


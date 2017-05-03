import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Tabs from '../src/components/Tabs/Tabs';

storiesOf('Tabs', module)
  .add('one tab', () => (
    <Tabs items={[
      { title: 'Hello', label: 'hello' }
    ]} />
  ))
  .add('two tabs', () => (
    <Tabs items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' }
    ]} />
  ))
  .add('three tabs', () => (
    <Tabs items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' }
    ]} />
  ))
  .add('five tabs', () => (
    <Tabs items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' },
      { title: 'привет', label: 'hello_russian' },
      { title: '你好', label: 'hello_chinese' }
    ]} />
  ))
  .add('with onClick', () => (
    <Tabs items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' },
      { title: 'привет', label: 'hello_russian' },
      { title: '你好', label: 'hello_chinese' }
    ]} onChange={(label, index) => {
      alert(`clicked "${label}" at ${index} index`);
    }} />
  ));


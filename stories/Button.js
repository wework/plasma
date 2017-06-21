import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/components/Button/Button';

storiesOf('Button', module)
  .add('primary', () => (
    <Button onClick={action('clicked')}>Helslo Button</Button>
  ))
  .add('secondary', () => (
    <Button type="secondary" onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('tertiary', () => (
    <Button type="tertiary" onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('primary loading', () => (
    <Button type="primary" loading onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('secondary loading', () => (
    <Button type="secondary" loading onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('tertiary loading', () => (
    <Button type="tertiary" loading onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('disabled', () => (
    <Button type="primary" disabled onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with data attributes', () => (
    <Button data={{ qa: "stuff-and-things" }} type="primary" onClick={action('clicked')}>Hello Button</Button>
  ));

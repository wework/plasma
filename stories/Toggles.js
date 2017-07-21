

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Toggles from '../src/components/Toggles/Toggles';
import Button from '../src/components/Button/Button';

class TogglesWithLabelState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLabel: 'hello',
    };
  }

  render() {
    return <Toggles
      selectedLabel={this.state.selectedLabel}
      onChange={selectedLabel => this.setState({ selectedLabel })}
      items={this.props.items}
      type={this.props.type}
    />
  }
}

class TogglesWithIndexState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    return <div>
      <Toggles
        selectedIndex={this.state.selectedIndex}
        onChange={(_, selectedIndex) => this.setState({ selectedIndex })}
        items={this.props.items}
        type={this.props.type}
      />
      <Button
        onClick={() => this.setState(({ selectedIndex }) => ({
          selectedIndex: (selectedIndex + 1) % this.props.items.length,
        }))}
      >
        Next Toggle
      </Button>
    </div>
  }
}

storiesOf('Toggles', module)
  .add('one toggle - horizontal', () => (
    <Toggles selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' }
    ]} type="horizontal"/>
  ))
  .add('two toggles - horizontal', () => (
    <Toggles selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' }
    ]} type="horizontal"/>
  ))
  .add('three toggles - horizontal', () => (
    <Toggles selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' }
    ]} type ="horizontal"/>
  ))
  .add('five toggles - horizontal', () => (
    <Toggles selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' },
      { title: 'привет', label: 'hello_russian' },
      { title: '你好', label: 'hello_chinese' }
    ]} type="horizontal"/>
  ))

  .add('one toggle - vertical', () => (
    <Toggles selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' }
    ]} type="vertical"/>
  ))
  .add('two toggles - vertical', () => (
    <Toggles selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' }
    ]} type="vertical"/>
  ))
  .add('three toggles - vertical', () => (
    <Toggles selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' }
    ]} type ="vertical"/>
  ))
  .add('five toggles - vertical', () => (
    <Toggles selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' },
      { title: 'привет', label: 'hello_russian' },
      { title: '你好', label: 'hello_chinese' }
    ]} type="vertical"/>
  ))

  .add('with onClick - horizontal', () => (
    <Toggles selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' },
      { title: 'привет', label: 'hello_russian' },
      { title: '你好', label: 'hello_chinese' }
    ]} onChange={(label, index) => {
      alert(`clicked "${label}" at ${index} index`);
    }} type="horizontal"/>
  ))
  .add('selected 2nd by default - horizontal', () => (
    <Toggles selectedLabel="world" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' },
    ]} type="horizontal"/>
  ))
  .add('with label state management - horizontal', () => (
    <TogglesWithLabelState
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world', disabled: true },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="horizontal"/>
  ))
  .add('with index state management - horizontal', () => (
    <TogglesWithIndexState
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="horizontal"/>
  ))

  .add('with onClick - vertical', () => (
    <Toggles selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' },
      { title: 'привет', label: 'hello_russian' },
      { title: '你好', label: 'hello_chinese' }
    ]} onChange={(label, index) => {
      alert(`clicked "${label}" at ${index} index`);
    }} type="vertical"/>
  ))
  .add('selected 2nd by default - vertical', () => (
    <Toggles selectedLabel="world" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' },
    ]} type="vertical"/>
  ))
  .add('with label state management - vertical', () => (
    <TogglesWithLabelState
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world', disabled: true },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="vertical"/>
  ))
  .add('with index state management - vertical', () => (
    <TogglesWithIndexState
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="vertical"/>
  ))
  .add('with disabled - horizontal', () => (
    <Toggles selectedLabel="hello"
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world', disabled: true },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="horizontal"/>
  ))
  .add('with disabled - vertical', () => (
    <Toggles selectedLabel="hello"
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye', disabled: true },
      ]}
      type="vertical"/>
  ));


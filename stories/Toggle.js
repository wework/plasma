import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Toggle from '../src/components/Toggle/Toggle';
import Button from '../src/components/Button/Button';

import style from './style.scss';

class ToggleWithLabelState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLabel: 'hello',
    };
  }

  render() {
    return (
      <Toggle
        selectedLabel={this.state.selectedLabel}
        onChange={selectedLabel => this.setState({ selectedLabel })}
        items={this.props.items}
        type={this.props.type}
      />
    );
  }
}

class ToggleWithIndexState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    return (
      <div>
        <Toggle
          selectedIndex={this.state.selectedIndex}
          onChange={(_, selectedIndex) => this.setState({ selectedIndex })}
          items={this.props.items}
          type={this.props.type}
        />
        <Button
          onClick={() =>
            this.setState(({ selectedIndex }) => ({
              selectedIndex: (selectedIndex + 1) % this.props.items.length,
            }))
          }
        >
          Next Toggle
        </Button>
      </div>
    );
  }
}

storiesOf('Toggle', module)
  .add('one toggle - horizontal', () => (
    <Toggle selectedLabel="hello" items={[{ title: 'Hello', label: 'hello' }]} type="horizontal" />
  ))
  .add('two toggles - horizontal', () => (
    <Toggle
      selectedLabel="hello"
      items={[{ title: 'Hello', label: 'hello' }, { title: 'World', label: 'world' }]}
      type="horizontal"
    />
  ))
  .add('three toggles - horizontal', () => (
    <Toggle
      selectedLabel="hello"
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="horizontal"
    />
  ))
  .add('three toggles styled - horizontal', () => (
    <Toggle
      selectedLabel="hello"
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Disabled', label: 'disabled', disabled: true },
      ]}
      type="horizontal"
      className={style.toggle}
    />
  ))
  .add('five toggles - horizontal', () => (
    <Toggle
      selectedLabel="hello"
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
        { title: 'привет', label: 'hello_russian' },
        { title: '你好', label: 'hello_chinese' },
      ]}
      type="horizontal"
    />
  ))

  .add('one toggle - vertical', () => (
    <Toggle selectedLabel="hello" items={[{ title: 'Hello', label: 'hello' }]} type="vertical" />
  ))
  .add('two toggles - vertical', () => (
    <Toggle
      selectedLabel="hello"
      items={[{ title: 'Hello', label: 'hello' }, { title: 'World', label: 'world' }]}
      type="vertical"
    />
  ))
  .add('three toggles - vertical', () => (
    <Toggle
      selectedLabel="hello"
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="vertical"
    />
  ))
  .add('five toggles - vertical', () => (
    <Toggle
      selectedLabel="hello"
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
        { title: 'привет', label: 'hello_russian' },
        { title: '你好', label: 'hello_chinese' },
      ]}
      type="vertical"
    />
  ))

  .add('with onClick - horizontal', () => (
    <Toggle
      selectedLabel="hello"
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
        { title: 'привет', label: 'hello_russian' },
        { title: '你好', label: 'hello_chinese' },
      ]}
      onChange={(label, index) => {
        alert(`clicked "${label}" at ${index} index`);
      }}
      type="horizontal"
    />
  ))
  .add('selected 2nd by default - horizontal', () => (
    <Toggle
      selectedLabel="world"
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="horizontal"
    />
  ))
  .add('with label state management - horizontal', () => (
    <ToggleWithLabelState
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world', disabled: true },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="horizontal"
    />
  ))
  .add('with index state management - horizontal', () => (
    <ToggleWithIndexState
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="horizontal"
    />
  ))

  .add('with onClick - vertical', () => (
    <Toggle
      selectedLabel="hello"
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
        { title: 'привет', label: 'hello_russian' },
        { title: '你好', label: 'hello_chinese' },
      ]}
      onChange={(label, index) => {
        alert(`clicked "${label}" at ${index} index`);
      }}
      type="vertical"
    />
  ))
  .add('selected 2nd by default - vertical', () => (
    <Toggle
      selectedLabel="world"
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="vertical"
    />
  ))
  .add('with label state management - vertical', () => (
    <ToggleWithLabelState
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world', disabled: true },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="vertical"
    />
  ))
  .add('with index state management - vertical', () => (
    <ToggleWithIndexState
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="vertical"
    />
  ))
  .add('with disabled - horizontal', () => (
    <Toggle
      selectedLabel="hello"
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world', disabled: true },
        { title: 'Bye bye', label: 'bye' },
      ]}
      type="horizontal"
    />
  ))
  .add('with disabled - vertical', () => (
    <Toggle
      selectedLabel="hello"
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye', disabled: true },
      ]}
      type="vertical"
    />
  ));

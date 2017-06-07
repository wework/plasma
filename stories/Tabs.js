import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Tabs from '../src/components/Tabs/Tabs';
import Button from '../src/components/Button/Button';

class TabsWithLabelState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLabel: 'hello',
    };
  }

  render() {
    return <Tabs
      selectedLabel={this.state.selectedLabel}
      onChange={selectedLabel => this.setState({ selectedLabel })}
      items={this.props.items}
    />
  }
}

class TabsWithIndexState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    return <div>
      <Tabs
        selectedIndex={this.state.selectedIndex}
        onChange={(_, selectedIndex) => this.setState({ selectedIndex })}
        items={this.props.items}
      />
      <Button
        onClick={() => this.setState(({ selectedIndex }) => ({
          selectedIndex: (selectedIndex + 1) % this.props.items.length,
        }))}
      >
        Next Tab
      </Button>
    </div>
  }
}

storiesOf('Tabs', module)
  .add('one tab', () => (
    <Tabs selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' }
    ]} />
  ))
  .add('two tabs', () => (
    <Tabs selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' }
    ]} />
  ))
  .add('three tabs', () => (
    <Tabs selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' }
    ]} />
  ))
  .add('five tabs', () => (
    <Tabs selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' },
      { title: 'привет', label: 'hello_russian' },
      { title: '你好', label: 'hello_chinese' }
    ]} />
  ))
  .add('with onClick', () => (
    <Tabs selectedLabel="hello" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' },
      { title: 'привет', label: 'hello_russian' },
      { title: '你好', label: 'hello_chinese' }
    ]} onChange={(label, index) => {
      alert(`clicked "${label}" at ${index} index`);
    }} />
  ))
  .add('selected 2nd by default', () => (
    <Tabs selectedLabel="world" items={[
      { title: 'Hello', label: 'hello' },
      { title: 'World', label: 'world' },
      { title: 'Bye bye', label: 'bye' },
    ]} />
  ))
  .add('with label state management', () => (
    <TabsWithLabelState
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
      ]}
    />
  ))
  .add('with index state management', () => (
    <TabsWithIndexState
      items={[
        { title: 'Hello', label: 'hello' },
        { title: 'World', label: 'world' },
        { title: 'Bye bye', label: 'bye' },
      ]}
    />
  ));



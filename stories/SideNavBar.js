import React from 'react';
import _ from 'lodash';
import { storiesOf } from '@kadira/storybook';
import Image from '../src/components/Image/Image';
import SideNavBar from '../src/components/SideNavBar/SideNavBar';
import SideNavBarItem from '../src/components/SideNavBar/SideNavBarItem';

class SideNavBarWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedId: 0,
    };
  }
  render() {
    return (
      <SideNavBar>
        <Image
          style={{ width: 50, height: 'auto', marginBottom: 16 }}
          src="http://spacestation.wework.com/images/weworkLight.svg"
        />
        <SideNavBarItem
          label="Dark Bg"
          onClick={() => {}}
          selected={false}
          darkBg
        />
        <SideNavBarItem
          onClick={() => {}}
          selected={false}
        >
          <div>
            <img src="http://placehold.it/10x12" /> Node
          </div>
        </SideNavBarItem>
        <SideNavBarItem
          icon="http://placehold.it/24x24"
          label="Label 1"
          onClick={() => { this.setState({ selectedId: 0 }) }}
          selected={this.state.selectedId === 0}
        />
        <SideNavBarItem
          icon="http://placehold.it/24x24"
          label="Label 2"
          onClick={() => { this.setState({ selectedId: 1 }) }}
          selected={this.state.selectedId === 1}
        />
        <SideNavBarItem
          icon="http://placehold.it/24x24"
          label="Label 3"
          onClick={() => { this.setState({ selectedId: 2 }) }}
          selected={this.state.selectedId === 2}
        />
        <SideNavBarItem
          icon="http://placehold.it/24x24"
          label="Label 4"
          onClick={() => { this.setState({ selectedId: 3 }) }}
          selected={this.state.selectedId === 3}
        />
      </SideNavBar>
    );
  }
}

storiesOf('SideNavBar', module).add('default', () => {
  return (
    <SideNavBarWithState />
  );
});

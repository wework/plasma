import React from 'react';
import _ from 'lodash';
import { storiesOf } from '@kadira/storybook';
import Image from '../src/components/Image/Image';
import SideNavBar from '../src/components/SideNavBar/SideNavBar';
import SideNavBarItem from '../src/components/SideNavBar/SideNavBarItem';

storiesOf('SideNavBar', module).add('default', () => {
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
        label={<div><img src="http://placehold.it/10x12" /> Node</div>}
        onClick={() => {}}
        selected={false}
      />
      <SideNavBarItem
        icon="http://placehold.it/24x24"
        label="Label 1"
        onClick={() => {}}
        selected={false}
      />
      <SideNavBarItem
        icon="http://placehold.it/24x24"
        label="Label 2"
        onClick={() => {}}
        selected
      />
      <SideNavBarItem
        icon="http://placehold.it/24x24"
        label="Label 3"
        onClick={() => {}}
        selected={false}
      />
      <SideNavBarItem
        icon="http://placehold.it/24x24"
        label="Label 4"
        onClick={() => {}}
        selected={false}
      />
    </SideNavBar>
  );
});

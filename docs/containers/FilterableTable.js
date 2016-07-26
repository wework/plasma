import React from 'react';
import Plasma from '../../src';
import _ from 'lodash-compat';

export default class FilterableTable extends React.Component {
  render() {
    return(
      <div>
        <Plasma.Organism.SideNavBar>
          <Plasma.Atom.Image
            style={{width: 100, height: 'auto'}}
            src='//spacestation.wework.com/images/weworkLight.svg' />
          <Plasma.Organism.SideNavBarItem
            icon='//spacestation.wework.com/images/sales_sign.svg'
            iconStyle={{ width: 18, height: 18 }}
            label='Offices & Desks'
          />
          <Plasma.Organism.SideNavBarItem
            icon='//spacestation.wework.com/images/company.svg'
            iconStyle={{ width: 18, height: 18 }}
            label='Company'
          />
          <Plasma.Organism.SideNavBarItem label='Members' />
          <Plasma.Organism.SideNavBarItem label='Tours' />
          <Plasma.Organism.SideNavBarItem label='Services' />
        </Plasma.Organism.SideNavBar>
      </div>
    );
  }
}
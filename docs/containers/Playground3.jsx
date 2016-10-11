import _ from 'lodash';
import Select from 'react-select';
import { browserHistory } from 'react-router';
import React from 'react';
import {
  FixedLeft,
  FixedRight,
  SideNavBar,
  Image,
  SideNavBarItem,
  FormField,
  Table,
  Group,
  Header,
  Button,
  TextInput,
  Modal,
  RadioButton,
  Rule,
  Checkbox,
  SegmentedCard,
  Text
} from '../../src';

import getItems from '../_tableItems.jsx';

export default class Playground4 extends React.Component {

  constructor() {
    super();
    this.state = {
      tableItems: {},
      filteredItems: {},
      showModal: false,
      sortKey: 'email',
      locations: []
    };
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleBuildingTypeChange = this.handleBuildingTypeChange.bind(this);
  }

  componentWillMount() {
    getItems().then((result) => {
      this.setState({ tableItems: result, filteredItems: result });
    });
  }

  filterByEmail(email) {
    const filtered = _.filter(this.state.tableItems, (item) => {
      const regex = new RegExp(email);
      const result = regex.exec(item.email);
      if (result) return true;
      return false;
    });
    this.setState({ filteredItems: filtered });
  }

  sortByEmail(order) {
    const sorted = _.sortBy(this.state.tableItems, 'email');
    this.setState({ filteredItems: sorted, sortKey: 'email' });
  }

  sortByCity(order) {
    const sorted = _.sortBy(this.state.tableItems, 'city');
    this.setState({ filteredItems: sorted, sortKey: 'city' });
  }

  handleBuildingTypeChange(type, event) {
    this.setState({buildingType: type});
  }

  handleLocationChange(locations) {
    const locationValues = _.map(locations, 'value');
    this.setState({ locations: locationValues });
  }

  render() {
    return (
      <div>
        <FixedLeft>
          <SideNavBar>
            <Image
              style={{width: 50, height: 'auto', marginBottom: 16}}
              src='//spacestation.wework.com/images/weworkLight.svg' />
            <SideNavBarItem
              label='Chelsea'
              icon='//spacestation.wework.com/images/member.svg'
              iconStyle={{ width: 24, height: 24 }}
              onClick={ () => this.setState({ showModal: true }) }
            />
            <SideNavBarItem
              label='Docs'
              icon='//spacestation.wework.com/images/house.svg'
              iconStyle={{ width: 24, height: 24 }}
              onClick={() => browserHistory.push('/plasma/docs')}
            />
            <SideNavBarItem
              label='Table'
              icon='//spacestation.wework.com/images/sales_sign.svg'
              iconStyle={{ width: 24, height: 24 }}
              onClick={() => browserHistory.push('/plasma/playground4')}
            />
            <SideNavBarItem
              label='Settings'
              icon='//spacestation.wework.com/images/company.svg'
              iconStyle={{ width: 24, height: 24 }}
              onClick={() => browserHistory.push('/plasma/playground3')}
            />
            <SideNavBarItem
              label='Tours'
              icon='//spacestation.wework.com/images/calendar.svg'
              iconStyle={{ width: 24, height: 24 }}
            />
            <SideNavBarItem
              label='Services'
              icon='//spacestation.wework.com/images/services.svg'
              iconStyle={{ width: 24, height: 24 }}
            />
            <SideNavBarItem
              label='Meagan'
              icon='https://avatars.io/twitter/owltastic'
              iconStyle={{ width: 32, height: 32, borderRadius: 999 }}
            />
          </SideNavBar>
          <div style={{ marginTop: 40 }}>
            <SegmentedCard>
              <div>
                <Header h2 text='Member' />
                <Rule type='dotted' />
                <Text>
                  An amenity is an element (title + description) that can be added to one or multiple buildings. If the amenity is intended for multiple locations, then the description should be generic.
                </Text>
              </div>
              <div>
                <Header h2 text='Edit Member Info' />
                <Rule type='dotted' />
                <Group>
                  <FormField label='Name'>
                    <TextInput value='Britney Johnson' />
                  </FormField>
                  <FormField label='Email'>
                    <TextInput value='britneyj4eva@gmail.com'/>
                  </FormField>
                </Group>
                <Group>
                  <FormField label='Location'>
                    <Select
                      multi
                      name="location"
                      value={this.state.locations}
                      options={[
                        { value: 'chelsea', label: 'NY15 - Chelsea' },
                        { value: 'chargingbull', label: 'NY17 - Charging Bull' },
                        { value: 'dumbo', label: 'NY20 - Dumbo' },
                        { value: 'wallst', label: 'NY3 - Wall St.' },
                      ]}
                      onChange={this.handleLocationChange}
                    />
                  </FormField>
                  <FormField label='Phone #'>
                    <TextInput value='567-8309'/>
                  </FormField>
                </Group>
              </div>
            </SegmentedCard>
            <SegmentedCard>
              <div>
                <Header h2 text='Member' />
                <Rule type='dotted' />
                <Text>
                  An amenity is an element (title + description) that can be added to one or multiple buildings. If the amenity is intended for multiple locations, then the description should be generic.
                </Text>
              </div>
              <div>
                <Header h2 text='Edit Member Info' />
                <Rule type='dotted' />
                <Group>
                  <FormField label='Name'>
                    <TextInput value='Britney Johnson' />
                  </FormField>
                  <FormField label='Email'>
                    <TextInput value='britneyj4eva@gmail.com'/>
                  </FormField>
                </Group>
                <Group>
                  <FormField label='Location'>
                    <Select
                      multi
                      name="location2"
                      options={[
                        { value: 'chelsea', label: 'NY15 - Chelsea' },
                        { value: 'chargingbull', label: 'NY17 - Charging Bull' },
                        { value: 'dumbo', label: 'NY20 - Dumbo' },
                        { value: 'wallst', label: 'NY3 - Wall St.' },
                      ]}
                    />
                  </FormField>
                  <FormField label='Phone #'>
                    <TextInput value='567-8309'/>
                  </FormField>
                </Group>
              </div>
            </SegmentedCard>
          </div>
        </FixedLeft>
        <Modal
          visible={this.state.showModal}
          style={{ width: 400 }}
          onDismiss={() => this.setState({ showModal: false })}
        >
          <Header h4 text='Change Building' />
          <Rule type='dotted' />
          <FormField label='Building Type'>
            <Group>
              <RadioButton checked={this.state.buildingType === 'wework'} text="WeWork" onChange={this.handleBuildingTypeChange.bind(null, 'wework')} />
              <RadioButton checked={this.state.buildingType === 'welive'} text="WeLive" onChange={this.handleBuildingTypeChange.bind(null, 'welive')} />
            </Group>
          </FormField>
          <FormField label='Building Name'>
            <Select
              name="building"
              value='chelsea'
              options={[
                { value: 'chelsea', label: 'Chelsea' },
                { value: 'chargingbull', label: 'Charging Bull' },
                { value: 'dumbo', label: 'Dumbo' },
                { value: 'wallst', label: 'Wall St.' },
              ]}
              onChange={this.handleLocationChange}
            />
          </FormField>
          <Group layout={['50%']}>
            <Button type='secondary' label='Cancel' onClick={() => { this.setState({showModal: false}) }} />
            <Button label='Change' onClick={ () => alert('👍👍👍👍👍') } />
          </Group>
        </Modal>
      </div>
    );
  }
}

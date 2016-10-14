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
    };
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

  render() {
    return (
      <div>
        <FixedLeft>
          <SideNavBar>
            <Image
              style={{ width: 28 }}
              src="https://s3.amazonaws.com/wework.design/ss-logo.png"
            />
            <Image
              style={{width: 50, height: 'auto', marginBottom: 16}}
              src='//spacestation.wework.com/images/weworkLight.svg' />
            <SideNavBarItem
              label='Meagan'
              icon='https://avatars.io/twitter/owltastic'
              iconStyle={{ width: 32, height: 32, borderRadius: 999 }}
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
              label='Manhattan Beach Towers'
              icon='//spacestation.wework.com/images/member.svg'
              iconStyle={{ width: 24, height: 24 }}
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
          </SideNavBar>

            <div>
              <Group style={{ marginBottom: 40, marginTop: 40 }} layout={['grow', 'shrink']}>
                <Header h2 text='Members' />
                <Button>Test</Button>
              </Group>
              <FixedLeft stickAt={30} contentStyle={{ marginRight: 0 }}>
                <div style={{ width: 212, position: 'relative', top: 4 }}>
                  <FormField label='Email'>
                    <TextInput onChange={(event) => this.filterByEmail(event.target.value)} />
                  </FormField>
                  <FormField label='Phone #'>
                    <TextInput />
                  </FormField>
                  <FormField label="What is the question?">
                    <Group vertical>
                      <RadioButton text="Are you serious?" />
                      <RadioButton text="No but really. C'mon." />
                    </Group>
                  </FormField>
                  <Rule type='dashed' />
                  <FormField label="How many people do you love?">
                    <Group vertical>
                      <Checkbox text="None" />
                      <Checkbox text="2" onChange={(v) => console.log(v.nativeEvent)} />
                    </Group>
                  </FormField>
                  <FormField label='What is your occupation?'>
                    <Select
                      multi
                      name="occupation"
                      value="one"
                      options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                        { value: 'two', label: 'Three' },
                        { value: 'two', label: 'Four' },
                        { value: 'two', label: 'Five' },
                      ]}
                    />
                  </FormField>
                  <Group vertical>
                    <Button label='Filter' onClick={ () => this.setState({ showModal: true }) } />
                    <Button type='secondary' label='Clear' onClick={() => { alert('🗑🗑🗑🗑🗑') }} />
                  </Group>
                </div>
                <div>
                  <Table
                    headerData={[
                      { key: 'name', label: 'Name' },
                      { key: 'email', label: 'Email', sortable: true, onClick: () => this.sortByEmail('desc') },
                      { key: 'petName', label: 'Pet name' },
                      { key: 'petType', label: 'Pet type' },
                    ]}
                    spanMap={{ pets: ['petName', 'petType'] }}
                    items={this.state.filteredItems}
                    stickAt={30}
                    selectedColumnKey={this.state.sortKey}
                    clickable
                    highlightable
                  />
                </div>
              </FixedLeft>
            </div>
        </FixedLeft>
        <Modal
          visible={this.state.showModal}
          style={{ width: 400 }}
          onDismiss={() => this.setState({ showModal: false })}
        >
          <Header h4 text='Information' />
          <FormField label='Last name'>
            <TextInput />
          </FormField>
          <Group layout={['50%']}>
            <Button type='secondary' label='Cancel' onClick={() => { alert('🗑🗑🗑🗑🗑') }} />
            <Button label='OK' onClick={ () => alert('👍👍👍👍👍') } />
          </Group>
        </Modal>
      </div>
    );
  }
}

import _ from 'lodash';
import React from 'react';
import Select from 'react-select';
import {
  FixedLeft,
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
  HorizontalScroll,
} from '../../src';
import getItems from '../_tableItems';

export default class Playground2 extends React.Component {

  constructor() {
    super();
    this.state = {
      tableItems: {},
      filteredItems: {},
      showModal: false,
    };
  }

  componentWillMount() {
    getItems().then((result) => {
      this.setState({ tableItems: result, filteredItems: result });
    });
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
              onClick={() => alert('meagan')}
            />
            <SideNavBarItem
              label='Chelsea'
              icon='//spacestation.wework.com/images/house.svg'
              iconSize={24}
            />
            <SideNavBarItem
              label='Offices & Desks'
              icon='//spacestation.wework.com/images/sales_sign.svg'
              iconSize={24}
            />
            <SideNavBarItem
              label='Companies'
              icon='//spacestation.wework.com/images/company.svg'
              iconSize={24}
            />
            <SideNavBarItem
              label='Members'
              icon='//spacestation.wework.com/images/member.svg'
              iconSize={24}
            />
            <SideNavBarItem
              label='Tours'
              icon='//spacestation.wework.com/images/calendar.svg'
              iconSize={24}
            />
            <SideNavBarItem
              label='Services'
              icon='//spacestation.wework.com/images/services.svg'
              iconSize={24}
            />
          </SideNavBar>

          <div>
            <Header h1 text='Members' style={{ marginBottom: 16, marginTop: 32 }} />
            <FixedLeft contentStyle={{ marginRight: 0 }}>
              <div>
                Fixed Left
              </div>
              <div>
                <HorizontalScroll
                  onScroll={(data) => console.log(data)}
                >
                  <Table
                    headerData={{ name: 'Name', email: 'Email', phone: 'Phone #', city: 'City', gender: 'Gender', favoriteColor: 'Favorite Color' }}
                    items={this.state.filteredItems}
                    stickAt={30}
                  />
                </HorizontalScroll>
              </div>
            </FixedLeft>
          </div>
        </FixedLeft>
        <Modal
          visible={ this.state.showModal }
          style={{ width: 400 }}
          onDismiss={() => this.setState({ showModal: false }) }
        >
          <Header h4 text='Information' />
          <FormField label='Last name'>
            <TextInput />
          </FormField>
          <Group layout={['40%']}>
            <Button secondary label='Clear' onClick={() => { alert('🗑🗑🗑🗑🗑') }} />
            <Button label='Filter' onClick={ () => alert('👍👍👍👍👍') } />
          </Group>
        </Modal>
      </div>
    );
  }
}

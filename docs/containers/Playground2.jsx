import React from 'react';
import Plasma from '../../src';
import _ from 'lodash';
import getItems from '../_tableItems';

const P = Plasma;

export default class Playground2 extends React.Component {

  constructor() {
    super();
    this.state = {
      tableItems: {},
      filteredItems: {},
    };
    this.filter = this.filter.bind(this);
  }

  componentWillMount() {
    getItems().then((result) => {
      this.setState({ tableItems: result, filteredItems: result });
    });
  }

  filter() {
    let s = 'a';
    const filtered = _.filter(this.state.tableItems, (item) => {
      const fi = _.first(item.name);
      return fi && fi.toLowerCase() === s;
    });
    this.setState({ filteredItems: filtered });
  }

  render() {
    return(
      <P.P.FixedLeft>
        <P.O.SideNavBar>
          <P.A.Image
            style={{width: 32}}
            src=' https://s3.amazonaws.com/wework.design/ss-logo.png' />
          <P.A.Image
            style={{width: 50, height: 'auto', marginBottom: 16}}
            src='//spacestation.wework.com/images/weworkLight.svg' />
          <P.O.SideNavBarItem
            label='Meagan'
            icon='https://avatars.io/twitter/owltastic'
            iconStyle={{ width: 32, height: 32, borderRadius: 999 }}
            onClick={() => alert('Andrew is my boyfriend')}
          />
          <P.O.SideNavBarItem
            label='Chelsea'
            icon='//spacestation.wework.com/images/house.svg'
            iconStyle={{ width: 18, height: 18 }}
          />
          <P.O.SideNavBarItem
            label='Offices & Desks'
            icon='//spacestation.wework.com/images/sales_sign.svg'
            iconStyle={{ width: 18, height: 18 }}
          />
          <P.O.SideNavBarItem
            label='Companies'
            icon='//spacestation.wework.com/images/company.svg'
            iconStyle={{ width: 18, height: 18 }}
          />
          <P.O.SideNavBarItem
            label='Members'
            icon='//spacestation.wework.com/images/member.svg'
            iconStyle={{ width: 18, height: 18 }}
          />
          <P.O.SideNavBarItem
            label='Tours'
            icon='//spacestation.wework.com/images/calendar.svg'
            iconStyle={{ width: 18, height: 18 }}
          />
          <P.O.SideNavBarItem
            label='Services'
            icon='//spacestation.wework.com/images/services.svg'
            iconStyle={{ width: 18, height: 18 }}
          />
        </P.O.SideNavBar>
        <div style={{ padding: '32px 16px 32px 32px' }}>
          <P.A.SegmentedCard>
            <div>
              <P.A.Header h2 text='Member'/>
              <P.A.Text>
                Protip: Don't do this
              </P.A.Text>
            </div>
            <div>
              <P.M.Group>
                <P.M.FormField label='Name'>
                  <P.A.TextInput />
                </P.M.FormField>
                <P.M.FormField label='Email'>
                  <P.A.TextInput />
                </P.M.FormField>
                <P.M.FormField label='Phone #'>
                  <P.A.TextInput />
                </P.M.FormField>
              </P.M.Group>
              <P.M.FormField label='Country'>
                <P.M.Select
                  name="form-field-name"
                  value="one"
                  multi
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                    { value: 'three', label: 'Three' },
                    { value: 'four', label: 'Four' },
                  ]}
                />
              </P.M.FormField>
            </div>
          </P.A.SegmentedCard>
        </div>
      </P.P.FixedLeft>
    );
  }
}

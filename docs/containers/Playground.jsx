import React from 'react';
import Plasma from '../../src';
import _ from 'lodash';
import getItems from '../_tableItems.jsx';

const P = Plasma;

export default class Playground extends React.Component {

  constructor() {
    super();
    this.state = {
      tableItems: {},
      filteredItems: {}
    }
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
            style={{width: 80, height: 'auto', marginBottom: 16}}
            src='//spacestation.wework.com/images/weworkLight.svg' />
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
        <P.P.FixedTop>

          <P.O.TopNavBar />

          <div>
            <P.T.Masthead
              style={{ paddingTop: 24 }}
              header='Members'
            />
            <P.P.FixedLeft>

              <div style={{ width: 212, padding: 16, position: 'relative', top: -12 }}>
                <P.A.Header h2 underline text='Filters' style={{ marginBottom: 24 }} />
                <P.M.FormField label='Phone number'>
                  <P.A.TextInput />
                </P.M.FormField>
                <P.M.FormField label='First name'>
                  <P.A.TextInput />
                </P.M.FormField>
                <P.M.FormField label='Last name'>
                  <P.A.TextInput />
                </P.M.FormField>
                <P.M.RowGroup>
                  <P.A.Button secondary label='Clear' onClick={() => { alert('🗑🗑🗑🗑🗑') }} />
                  <P.A.Button label='Filter' onClick={ () => alert('👍👍👍👍👍') } />
                </P.M.RowGroup>
              </div>

              <P.O.Table
                style={{ paddingRight: 16 }}
                header={{ name: 'Name', email: 'Email', phone: 'Phone #', city: 'City' }}
                items={ this.state.filteredItems }
              />

            </P.P.FixedLeft>
          </div>
        </P.P.FixedTop>
      </P.P.FixedLeft>
    );
  }
}
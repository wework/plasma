import React from 'react';
import Plasma from '../../src';
import _ from 'lodash-compat';

const P = Plasma;

export default class Playground extends React.Component {
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
        <div>
          <P.T.Masthead
            secondary
            label='Company'
            header='Viral Gains'
          />
          <P.A.Card style={{ width: 500 }}>
            <P.M.FormField label='Phone number'>
                <P.A.TextInput />
              </P.M.FormField>
            <P.M.ButtonGroup>
              <P.M.FormField label='First name'>
                <P.A.TextInput />
              </P.M.FormField>
              <P.M.FormField label='Last name'>
                <P.A.TextInput />
              </P.M.FormField>
            </P.M.ButtonGroup>
            <P.M.ButtonGroup>
              <P.A.Button />
              <P.A.Button secondary />
              <P.A.Button disabled />
            </P.M.ButtonGroup>
          </P.A.Card>
          
        </div>
      </P.P.FixedLeft>
    );
  }
}
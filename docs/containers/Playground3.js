import React from 'react';
import { Atom, Molecule, Organism, Template, Page } from '../../src';
import _ from 'lodash';
import getItems from '../_tableItems';

export default class Playground2 extends React.Component {

  constructor() {
    super();
    this.state = {
      tableItems: {},
      filteredItems: {},
      showModal: false
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
      <div>
        <Page.FixedLeft>
          <Organism.SideNavBar>
            <Atom.Image
              style={{width: 28}}
              src=' https://s3.amazonaws.com/wework.design/ss-logo.png' />
            <Atom.Image
              style={{width: 50, height: 'auto', marginBottom: 16}}
              src='//spacestation.wework.com/images/weworkLight.svg' />
            <Organism.SideNavBarItem
              label='Meagan'
              icon='https://avatars.io/twitter/owltastic'
              iconStyle={{ width: 32, height: 32, borderRadius: 999 }}
            />
            <Organism.SideNavBarItem
              label='Chelsea'
              icon='//spacestation.wework.com/images/house.svg'
              iconStyle={{ width: 18, height: 18 }}
            />
            <Organism.SideNavBarItem
              label='Offices & Desks'
              icon='//spacestation.wework.com/images/sales_sign.svg'
              iconStyle={{ width: 18, height: 18 }}
            />
            <Organism.SideNavBarItem
              label='Companies'
              icon='//spacestation.wework.com/images/company.svg'
              iconStyle={{ width: 18, height: 18 }}
            />
            <Organism.SideNavBarItem
              label='Members'
              icon='//spacestation.wework.com/images/member.svg'
              iconStyle={{ width: 18, height: 18 }}
            />
            <Organism.SideNavBarItem
              label='Tours'
              icon='//spacestation.wework.com/images/calendar.svg'
              iconStyle={{ width: 18, height: 18 }}
            />
            <Organism.SideNavBarItem
              label='Services'
              icon='//spacestation.wework.com/images/services.svg'
              iconStyle={{ width: 18, height: 18 }}
            />
          </Organism.SideNavBar>

            <div style={{paddingLeft: 16}}>
              <Atom.Header h1 text='Members' style={{ marginBottom: 16, marginTop: 32 }} />
              <Page.FixedLeft stickAt={30}>

                <div style={{ width: 212, paddingRight: 16, position: 'relative', top: 4 }}>
                  <Atom.Header h2 text='Filters' style={{ marginBottom: 16 }} />
                  
                  <Molecule.FormField label='Name'>
                    <Atom.TextInput />
                  </Molecule.FormField>

                  <Molecule.FormField label='Email'>
                    <Atom.TextInput />
                  </Molecule.FormField>
                  <Molecule.FormField label='Phone #'>
                    <Atom.TextInput />
                  </Molecule.FormField>
                  <Molecule.FormField label='Country'>
                    <Molecule.Select
                      name="form-field-name"
                      value="one"
                      multi={true}
                      options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                        { value: 'three', label: 'Three' },
                        { value: 'four', label: 'Four' },
                      ]}
                    />
                  </Molecule.FormField>
                  <Molecule.FormField label="What is the question?">
                    <Molecule.Group vertical>
                      <Atom.RadioButton text="Are you serious?" />
                      <Atom.RadioButton text="No but really. C'mon." />
                    </Molecule.Group>
                  </Molecule.FormField>
                  <Molecule.Group>
                    <Atom.Button secondary label='Clear' onClick={() => { alert('🗑🗑🗑🗑🗑') }} />
                    <Atom.Button label='Filter' onClick={ () => this.setState({ showModal: true }) } />
                  </Molecule.Group>
                </div>

                <div>
                  <Organism.Table
                    style={{ paddingRight: 16 }}
                    headerData={{ name: 'Name', email: 'Email', phone: 'Phone #', city: 'City' }}
                    items={ this.state.filteredItems }
                    stickAt={30}
                  />
                  <div style={{ height: 200 }}/>
                  <Organism.Table
                    style={{ paddingRight: 16 }}
                    headerData={{ foo: 'bar', red: 'blue', green: 'yellow', purp: '💖' }}
                    items={ this.state.filteredItems }
                    stickAt={30}
                  />

                </div>

              </Page.FixedLeft>
            </div>

        </Page.FixedLeft>
        <Template.Modal
          visible={ this.state.showModal }
          style={{ width: 400 }}
          onDismiss={() => this.setState({ showModal: false }) }
        >
          <Atom.Header h4 text='Information' />
          <Molecule.FormField label='Last name'>
            <Atom.TextInput />
          </Molecule.FormField>
          <Molecule.Group layout={['40%']}>
            <Atom.Button secondary label='Clear' onClick={() => { alert('🗑🗑🗑🗑🗑') }} />
            <Atom.Button label='Filter' onClick={ () => alert('👍👍👍👍👍') } />
          </Molecule.Group>
        </Template.Modal>
      </div>
    );
  }
}
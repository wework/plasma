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
  Text,
  Label
} from '../../src';

import getItems from '../_tableItems.jsx';

const products = {
  product1: { key: 'product1', name: '4.101', quantity: '4 desks', building: 'Grand Central', price: '$3,300.00' },
  product2: { key: 'product2', name: 'SSHD101', quantity: '1 desk', building: 'Grand Central', price: '$450.00' },
  product3: { key: 'product3', name: '12101A', quantity: '1 desk', building: '300 Park', price: '$800.00' },
  product4: { key: 'product4', name: '12101B', quantity: '1 desk', building: '300 Park', price: '$800.00' },
  product5: { key: 'product5', name: '4.101', quantity: '4 desks', building: 'Grand Central', price: '$3,300.00' },
  product6: { key: 'product6', name: '4.101', quantity: '4 desks', building: 'Grand Central', price: '$3,300.00' },
  product7: { key: 'product7', name: '4.101', quantity: '4 desks', building: 'Grand Central', price: '$3,300.00' },
  product8: { key: 'product8', name: '4.101', quantity: '4 desks', building: 'Grand Central', price: '$3,300.00' },
  product9: { key: 'product9', name: '4.101', quantity: '4 desks', building: 'Grand Central', price: '$3,300.00' },
  product10: { key: 'product10', name: '4.101', quantity: '4 desks', building: 'Grand Central', price: '$3,300.00' },
};

export default class Playground4 extends React.Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
      addedProducts: [],
    };
    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleProductChange(product) {
    const addedProducts = _.clone(this.state.addedProducts);
    addedProducts.push(products[product.value]);
    this.setState({ addedProducts });
  }

  handleRemoveClick(productKey) {
    const addedProducts = _.clone(this.state.addedProducts);
    _.remove(addedProducts, (product) => product.key === productKey);
    this.setState({ addedProducts });
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
            <Button
              label='Add'
              onClick={() => this.setState({ showModal: true })}
            />
          </div>
        </FixedLeft>
        <Modal
          visible={this.state.showModal}
          style={{ width: 500 }}
          onDismiss={() => this.setState({ showModal: false })}
        >
          <Header h4 text='Add products' />
          <Rule type='dotted' />
          <FormField label='Search for items or products:'>
            <Select
              placeholder='Search...'
              name="product"
              value={null}
              options={ _.map(products, (product) => { return { value: product.key, label: `${product.name} • ${product.quantity}` }; }) }
              onChange={this.handleProductChange}
            />
          </FormField>
          <Group layout={['grow', 'shrink']}>
            <Label text='Product' />
            <Label text='Start date' />
          </Group>
          <Rule style={{ marginBottom: 5 }} />
          { this.state.addedProducts.length > 0 &&
            <div style={{ marginBottom: 30 }}>
              {this.state.addedProducts.map((product) => {
                return (
                  <Group style={{ marginBottom: 10 }} layout={['grow', '200px', 'shrink']}>
                    <div>
                      <Text style={{ fontWeight: 'bold' }}>{product.name} • {product.quantity}</Text>
                      <Text>{product.building}</Text>
                    </div>
                    <div>
                      <Select
                        name={`${product.key}-startDate`}
                        value={{ label: 'November 1, 2016' }}
                        clearable={false}
                      />
                    </div>
                    <div
                      onClick={this.handleRemoveClick.bind(null, product.key)}
                      style={{cursor: 'pointer'}}
                    >
                      <div style={{
                        fontFamily: 'Material-Design-Iconic-Font',
                        height: 40,
                        lineHeight: '40px'
                      }} className='zmdi-close' />
                    </div>
                  </Group>
                );
              })}
            </div>
          }
          { this.state.addedProducts.length === 0 &&
            <div style={{flex: 1, textAlign: 'center', color: '#aaa', marginBottom: 30}}>No products selected</div>
          }
          <Group layout={['50%']}>
            <Button type='secondary' label='Cancel' onClick={() => { this.setState({showModal: false}) }} />
            <Button label='Add' onClick={ () => alert('👍👍👍👍👍') } />
          </Group>
        </Modal>
      </div>
    );
  }
}

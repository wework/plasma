/* eslint-disable */

import React from 'react';
import Table from '../../components/Table/Table';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Table Component', () => {
  function createNodeMock(element) {
    if (element.type === 'table') {
      return {
        offsetWidth: 1000,
      };
    }
    if (element.type === 'calculateSizes') {
      return () => {};
    }
    return null;
  }

  test('render', () => {
    const component = renderer.create(<Table />, { createNodeMock });
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('correct header', () => {
    const headerData = [
      { label: 'First name', key: 'firstname' },
      { label: 'Last name', key: 'lastname' },
      { label: 'Age', key: 'age' },
      { label: 'Sex', key: 'sex' },
      { label: 'Location', key: 'location' },
      { label: 'Nickname', key: 'nickname' },
    ];

    const items = [
      {
        firstname: 'Brad',
        lastname: 'Pitt',
        age: '45',
        sex: [{ sex: 'Male', location: 'Beverly Hills' }, { sex: 'Female', location: 'Tokyo' }],
        nickname: 'The Bulldozer',
      },
      {
        firstname: 'Jennifer',
        lastname: 'Lawrence',
        age: '26',
        sex: [{ sex: 'Male', location: 'Beverly Hills' }, { sex: 'Female', location: 'Tokyo' }],
        nickname: 'Slow Loris',
      },
    ];

    const component = mount(
      <Table
        empty={false}
        emptyText="The table is empty."
        headerData={headerData}
        spanMap={{ sex: ['sex', 'location'] }}
        items={items}
        loading={false}
      />
    );

    expect(component.find('thead').find('tr')).toHaveLength(1);
    expect(
      component
        .find('thead')
        .find('tr')
        .find('th')
    ).toHaveLength(6);
    expect(
      component
        .find('thead')
        .find('tr')
        .find('th')
        .at(0)
        .text()
    ).toEqual('First name');
    expect(
      component
        .find('thead')
        .find('tr')
        .find('th')
        .at(1)
        .text()
    ).toEqual('Last name');
    expect(
      component
        .find('thead')
        .find('tr')
        .find('th')
        .at(2)
        .text()
    ).toEqual('Age');
    expect(
      component
        .find('thead')
        .find('tr')
        .find('th')
        .at(3)
        .text()
    ).toEqual('Sex');
    expect(
      component
        .find('thead')
        .find('tr')
        .find('th')
        .at(4)
        .text()
    ).toEqual('Location');
    expect(
      component
        .find('thead')
        .find('tr')
        .find('th')
        .at(5)
        .text()
    ).toEqual('Nickname');
  });
});

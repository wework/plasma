/* eslint-disable */

import React from 'react';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import SideNavBarTop from '../../components/SideNavBar/SideNavBarTop';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

let items;

describe('SideNavBar Component', () => {
  beforeEach(() => {
    items = [
      {
        id: 'one',
        label: 'One',
        items: [
          {
            id: 'one-one',
            label: 'One One',
          },
        ],
      },
      {
        id: 'two',
        label: 'Two',
        items: [
          {
            id: 'two-one',
            label: 'Two One',
          },
          {
            id: 'two-two',
            label: 'Two Two',
          },
        ],
      },
      {
        id: 'three',
        label: 'Three',
      }
    ]
  });

  test('render', () => {
    const component = renderer.create(
      <SideNavBar
        items={items}
      />
    );
    expect(component).toMatchSnapshot()
  });

  test('onClick', () => {
    const onClick = jest.fn();
    const component = mount(
      <SideNavBar
        topText="YOLO"
        onClickTop={onClick}
        items={items}
      />
    );
    component.find(SideNavBarTop).simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
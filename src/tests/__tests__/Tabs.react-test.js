/* eslint-disable */

import React from 'react';
import Tabs from '../../components/Tabs/Tabs';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Tabs Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Tabs />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('two items', () => {
    const items = [
      {
        label: 'one',
        title: 'One',
      },
      {
        label: 'two',
        title: 'Two',
      }
    ];
    const component = shallow(
      <Tabs
        items={items}
      />
    );
    expect(component.find('li')).toHaveLength(2);
  });

  test('onClick first tab', () => {
    const items = [
      {
        label: 'one',
        title: 'One',
      },
      {
        label: 'two',
        title: 'Two',
      }
    ];
    const onChange = jest.fn();
    const component = mount(
      <Tabs
        items={items}
        onChange={onChange}
      />
    );
    component.find('li').first().simulate('click');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("one", 0);
  });

  test('onClick last tab', () => {
    const items = [
      {
        label: 'one',
        title: 'One',
      },
      {
        label: 'two',
        title: 'Two',
      }
    ];
    const onChange = jest.fn();
    const component = mount(
      <Tabs
        items={items}
        onChange={onChange}
      />
    );
    component.find('li').last().simulate('click');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("two", 1);
  });

  test('keydown first tab', () => {
    const items = [
      {
        label: 'one',
        title: 'One',
      },
      {
        label: 'two',
        title: 'Two',
      },
      {
        label: 'three',
        title: 'Three',
      }
    ];
    const onChange = jest.fn();
    const component = mount(
      <Tabs
        items={items}
        onChange={onChange}
      />
    );
    component.find('li').first().simulate('keydown', { keyCode: 13 });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("one", 0);
  });

  test('keydown last tab', () => {
    const items = [
      {
        label: 'one',
        title: 'One',
      },
      {
        label: 'two',
        title: 'Two',
      },
      {
        label: 'three',
        title: 'Three',
      }
    ];
    const onChange = jest.fn();
    const component = mount(
      <Tabs
        items={items}
        onChange={onChange}
      />
    );
    component.find('li').last().simulate('keydown', { keyCode: 13 });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("three", 2);
  });
});
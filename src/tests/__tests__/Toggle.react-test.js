/* eslint-disable */

import React from 'react';
import Toggle from '../../components/Toggle/Toggle';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import uuidv4 from 'uuid/v4';

describe('Toggle Component', () => {
  test('render', () => {
    const component = renderer.create(<Toggle />);
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
      },
    ];
    const component = shallow(<Toggle items={items} />);
    expect(component.find('li')).toHaveLength(2);
  });

  test('onClick first item', () => {
    const items = [
      {
        label: 'one',
        title: 'One',
      },
      {
        label: 'two',
        title: 'Two',
      },
    ];
    const onChange = jest.fn();
    const component = mount(<Toggle items={items} onChange={onChange} />);
    component
      .find('li')
      .first()
      .simulate('click');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('one', 0);
  });

  test('keydown first item', () => {
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
      },
    ];
    const onChange = jest.fn();
    const component = mount(<Toggle items={items} onChange={onChange} />);
    component
      .find('li')
      .first()
      .simulate('keydown', { keyCode: 13 });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('one', 0);
  });

  test('data attributes are added', () => {
    const items = [
      {
        label: 'one',
        title: 'One',
      },
    ];
    const dataAttributes = {
      qa: 'toggle',
      id: uuidv4(),
    };
    const component = shallow(<Toggle items={items} data={dataAttributes} />);

    Object.entries(dataAttributes).forEach(([key, value]) =>
      expect(component.prop(`data-${key}`)).toEqual(value)
    );
  });
});

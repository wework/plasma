/* eslint-disable */

import React from 'react';
import Search from '../../components/Search/Search';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Search Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Search
        items={[]}
        icon={<img src="http://yolo.com/icon.png" />}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('render value', () => {
    const component = renderer.create(
      <Search
        items={[]}
        clearable
        clearIcon={<img src="http://yolo.com/icon.png" />}
        value="test"
      />
    );

    expect(component).toMatchSnapshot();
  });

  test('onClear', () => {
    const onClear = jest.fn();
    const component = mount(
      <Search
        items={[]}
        clearable
        clearIcon={<img src="http://yolo.com/icon.png" />}
        onClear={onClear}
      />
    );
    component.setState({ value: 'text' });
    component.find('button').simulate('click');
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  test('onChange', () => {
    const onChange = jest.fn();
    const component = mount(
      <Search
        items={[]}
        onChange={onChange}
      />
    );

    const input = component.find('input');

    input.getDOMNode().value = 'YOLO';
    input.simulate('change');

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(component.state('value')).toBe('YOLO');
  });
});

/* eslint-disable */

import React from 'react';
import Search from '../../components/Search/Search';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Search Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Search />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('onClear', () => {
    const onClear = jest.fn();
    const component = mount(
      <Search
        clearable
        clearIconUrl='http://yolo.com/icon.png'
        onClear={onClear}
      />
    );
    component.setState({ text: 'text' });
    component.find('.clearableIcon').simulate('click');
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  test('onChange', () => {
    const onChange = jest.fn();
    const component = mount(
      <Search
        onChange={onChange}
      />
    );
    component.find('input').simulate('change', { target: { value: 'YOLO' }});
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(component.state('text')).toBe('YOLO');
  });
});
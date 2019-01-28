/* eslint-disable */

import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('TextInput Component', () => {
  test('render', () => {
    const component = renderer.create(<TextInput />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('focus', () => {
    const onFocus = jest.fn();
    const component = mount(<TextInput onFocus={onFocus} />);
    component.find('input').simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  test('blur', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const component = mount(<TextInput onFocus={onFocus} onBlur={onBlur} />);
    component.find('input').simulate('blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});

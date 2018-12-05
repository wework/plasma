/* eslint-disable */

import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('TextInput Component', () => {
  test('render', () => {
    const component = renderer.create(
      <TextInput
        name="name"
        id="id"
        value="foo"
        maxLength={100}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('render placeholder', () => {
    const component = renderer.create(
      <TextInput placeholder="placeholder" />
    );
    expect(component).toMatchSnapshot();
  });

  test('render prefix', () => {
    const component = renderer.create(
      <TextInput prefix="prefix" />
    );
    expect(component).toMatchSnapshot();
  });

  test('render suffix', () => {
    const component = renderer.create(
      <TextInput suffix="suffix" />
    );
    expect(component).toMatchSnapshot();
  });

  test('render error', () => {
    const component = renderer.create(
      <TextInput error />
    );
    expect(component).toMatchSnapshot();
  });

  test('change', () => {
    const onChange = jest.fn();
    const component = mount(
      <TextInput
        onChange={onChange}
      />
    );

    const input = component.find('input');

    const value = 'test';

    input.getDOMNode().value = value;
    input.simulate('change');

    expect(onChange).toHaveBeenCalledTimes(1);

    expect(onChange.mock.calls[0][0]).toBeDefined();
    expect(onChange.mock.calls[0][0].target.value).toBe(value);
  });

  test('focus and blur', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    const component = mount(
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );

    const input = component.find('input');

    input.simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);

    input.simulate('blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

});

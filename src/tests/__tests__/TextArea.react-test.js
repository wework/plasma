/* eslint-disable */

import React from 'react';
import TextArea from '../../components/TextArea/TextArea';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('TextArea Component', () => {
  test('render', () => {
    const component = renderer.create(
      <TextArea />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('focus', () => {
    const onFocus = jest.fn();
    const component = mount(
      <TextArea
        onFocus={onFocus}
      />
    );
    component.find('textarea').simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  test('blur', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const component = mount(
      <TextArea
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
    component.find('textarea').simulate('blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

});
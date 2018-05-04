/* eslint-disable */

import React from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Checkbox Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Checkbox />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree.props.checked = true;
    expect(tree).toMatchSnapshot();
  });

  test('no fancy style', () => {
    const component = shallow(<Checkbox>Test Checkbox</Checkbox>);
    expect(component.is('.inline')).toBe(false);
  });

  test('fancy style', () => {
    const component = shallow(<Checkbox fancy>Test Fancy Checkbox</Checkbox>);
    expect(component.is('.inline')).toBe(true);
  });
});

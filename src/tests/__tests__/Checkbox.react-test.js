/* eslint-disable */

import React from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Checkbox Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Checkbox />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree.props.isChecked = true;
    expect(tree).toMatchSnapshot();
  });
});
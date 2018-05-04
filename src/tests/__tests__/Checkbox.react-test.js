/* eslint-disable */

import React from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
import renderer from 'react-test-renderer';

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

  test('render', () => {
    const component = renderer.create(
      <Checkbox fancy />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

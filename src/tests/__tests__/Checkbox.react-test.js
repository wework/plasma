/* eslint-disable */

import React from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
import renderer from 'react-test-renderer';

describe('Checkbox Component', () => {
  test('render', () => {
    const component = renderer.create(<Checkbox />);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

    tree.props.checked = true;

    expect(tree).toMatchSnapshot();
  });

  test('render disabled', () => {
    const component = renderer.create(<Checkbox disabled />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('render error', () => {
    const component = renderer.create(<Checkbox error />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

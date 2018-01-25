/* eslint-disable */

import React from 'react';
import OverflowMenu from '../../components/OverflowMenu/OverflowMenu';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('OverflowMenu Component', () => {
  test('render', () => {
    const component = renderer.create(<OverflowMenu />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('render with label', () => {
    const component = renderer.create(<OverflowMenu label="Hello World!" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

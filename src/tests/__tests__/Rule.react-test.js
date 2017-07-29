/* eslint-disable */

import React from 'react';
import Rule from '../../components/Rule/Rule';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Rule Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Rule />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
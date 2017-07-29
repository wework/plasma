/* eslint-disable */

import React from 'react';
import Tooltip from '../../components/Tooltip/Tooltip';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Tooltip Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Tooltip />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
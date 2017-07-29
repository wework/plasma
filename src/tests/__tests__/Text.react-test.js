/* eslint-disable */

import React from 'react';
import Text from '../../components/Text/Text';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Text Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Text />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
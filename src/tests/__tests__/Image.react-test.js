/* eslint-disable */

import React from 'react';
import Image from '../../components/Image/Image';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Image Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Image />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
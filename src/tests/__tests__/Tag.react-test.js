/* eslint-disable */

import React from 'react';
import Tag from '../../components/Tag/Tag';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Tag Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Tag>
        YOLO
      </Tag>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
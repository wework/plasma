/* eslint-disable */

import React from 'react';
import Header from '../../components/Header/Header';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Header Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Header>
        YOLO
      </Header>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
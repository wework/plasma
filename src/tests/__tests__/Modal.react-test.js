/* eslint-disable */

import React from 'react';
import Modal from '../../components/Modal/Modal';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Modal Component', () => {
  test('render', () => {
    const component = renderer.create(<Modal>YOLO</Modal>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

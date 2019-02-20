/* eslint-disable */

import React from 'react';
import Icon from '../../components/Icon/Icon';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Icon Component', () => {
  test('render', () => {
    const component = renderer.create(<Icon />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

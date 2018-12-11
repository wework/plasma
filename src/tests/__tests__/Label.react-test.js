/* eslint-disable */

import React from 'react';
import Label from '../../components/Label/Label';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Label Component', () => {
  test('render', () => {
    const component = renderer.create(<Label />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

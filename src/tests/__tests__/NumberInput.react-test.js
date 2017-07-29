/* eslint-disable */

import React from 'react';
import NumberInput from '../../components/NumberInput/NumberInput';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('NumberInput Component', () => {
  test('render', () => {
    const component = renderer.create(
      <NumberInput />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
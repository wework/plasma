/* eslint-disable */

import React from 'react';
import Loader from '../../components/Loader/Loader';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Loader Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Loader />
    );
    expect(component).toMatchSnapshot()
  });
});
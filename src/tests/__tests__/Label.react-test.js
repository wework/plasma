/* eslint-disable */

import React from 'react';
import renderer from 'react-test-renderer';

import Label from '../../components/Label/Label';

describe('Label Component', () => {
  test('render', () => {
    const component = renderer.create(<Label>Test</Label>);

    expect(component).toMatchSnapshot();
  });

  test('render inline', () => {
    const component = renderer.create(<Label inline>Test</Label>);

    expect(component).toMatchSnapshot();
  });

  test('render disabled', () => {
    const component = renderer.create(<Label disabled>Test</Label>);

    expect(component).toMatchSnapshot();
  });

  test('render required', () => {
    const component = renderer.create(<Label required>Test</Label>);

    expect(component).toMatchSnapshot();
  });
});

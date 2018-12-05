/* eslint-disable */

import React from 'react';
import Hint from '../../components/Hint/Hint';
import renderer from 'react-test-renderer';

describe('Icon Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Hint className="test">Hint</Hint>
    );
    expect(component).toMatchSnapshot();
  });

  test('render with text', () => {
    const component = renderer.create(
      <Hint text="Hint" />
    );
    expect(component).toMatchSnapshot();
  });

  test('render disabled', () => {
    const component = renderer.create(
      <Hint disabled>Hint</Hint>
    );
    expect(component).toMatchSnapshot();
  });

  test('render error', () => {
    const component = renderer.create(
      <Hint error>Hint</Hint>
    );
    expect(component).toMatchSnapshot();
  });
});

/* eslint-disable */

import React from 'react';
import renderer from 'react-test-renderer';
import TimePicker, { DefaultOptions, FormatTypes } from '../src/components/TimePicker/TimePicker';

describe('TimePicker default', () => {
  test('default', () => {
    const component = renderer.create(<TimePicker disabled />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('24H format', () => {
    const component = renderer.create(
      <TimePicker timeFormat={FormatTypes.timeFormat24} value="14:00" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('12H format', () => {
    const component = renderer.create(
      <TimePicker timeFormat={FormatTypes.timeFormat12} value="14:00" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/* eslint-disable */

import React from 'react';
import SegmentedCard from '../../components/SegmentedCard/SegmentedCard';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('SegmentedCard Component', () => {
  test('render', () => {
    const component = renderer.create(
      <SegmentedCard />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
/* eslint-disable */

import React from 'react';
import RadioButton from '../../components/RadioButton/RadioButton';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('RadioButton Component', () => {
  test('render', () => {
    const component = renderer.create(
      <RadioButton />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree.props.checked = true;
    expect(tree).toMatchSnapshot();
  });

  test('description', () => {
    const component = shallow(
      <RadioButton
        description="wow such description"
      />
    );
    expect(component.find('.description')).toHaveLength(1);
  });
});
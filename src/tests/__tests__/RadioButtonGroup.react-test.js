/* eslint-disable */
import React from 'react';
import RadioButton from '../../components/RadioButton/RadioButton';
import RadioButtonGroup from '../../components/RadioButtonGroup/RadioButtonGroup';
import renderer from 'react-test-renderer';

describe('RadioButtonGroup Component', () => {
  test('render', () => {
    const tree = renderer
      .create(<RadioButtonGroup name="test" options={[]} onChange={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

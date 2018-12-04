/* eslint-disable */

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';

describe('Button Component', () => {
  test('render', () => {
    const component = renderer.create(
      <Button>YOLO</Button>
    );
    expect(component).toMatchSnapshot()
  });

  test('children', () => {
    const component = shallow(<Button>YOLO</Button>);
    expect(component.contains('YOLO')).toBe(true);
  });

  test('primary', () => {
    const component = shallow(<Button>YOLO</Button>);
    expect(component.find('.primary')).toHaveLength(1);
    expect(component.find('.secondary')).toHaveLength(0);
    expect(component.find('.tertiary')).toHaveLength(0);
  });

  test('secondary', () => {
    const component = shallow(<Button type="secondary">YOLO</Button>);
    expect(component.find('.primary')).toHaveLength(0);
    expect(component.find('.secondary')).toHaveLength(1);
    expect(component.find('.tertiary')).toHaveLength(0);
  });

  test('tertiary', () => {
    const component = shallow(<Button type="tertiary">YOLO</Button>);
    expect(component.find('.primary')).toHaveLength(0);
    expect(component.find('.secondary')).toHaveLength(0);
    expect(component.find('.tertiary')).toHaveLength(1);
  });

  test('disabled', () => {
    const component = shallow(<Button disabled>YOLO</Button>);
    expect(component.find('[disabled]')).toHaveLength(1);
    expect(component.prop('disabled')).toBe(true);
  });

  test('small', () => {
    const component = shallow(<Button size="small">YOLO</Button>);
    expect(component.find('.small')).toHaveLength(1);
  });

  test('loading', () => {
    const component = shallow(<Button loading>YOLO</Button>);
    expect(component.find('.loading')).toHaveLength(1);
    expect(component.contains('YOLO')).toBe(false);
    expect(component.find(Loader)).toHaveLength(1);
  });

  test('submit', () => {
    const component = shallow(<Button isSubmit>YOLO</Button>);
    expect(component.prop('type')).toBe('submit');
  });

  test('onClick', () => {
    const onClick = jest.fn();
    const component = mount(
      <Button
        onClick={onClick}
      >
        YOLO
      </Button>
    );
    component.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('onClick disabled', () => {
    const onClick = jest.fn();
    const component = mount(
      <Button
        disabled
        onClick={onClick}
      >
        YOLO
      </Button>
    );
    component.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test('with data attribute', () => {
    const component = shallow(
      <Button
        data={{ qa: 'important' }}
      >
        YOLO
      </Button>
    );
    expect(component.prop('data-qa')).toBe('important');
  });

});

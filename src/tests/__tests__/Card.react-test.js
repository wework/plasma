/* eslint-disable */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

let Card;

describe('Card Component snapshots', () => {
  beforeEach(() => {
    jest.mock('react-dom', () => {
      return {
        findDOMNode: (ref) => { return { offsetHeight: 80 }; }
      };
    });
    Card = require('../../components/Card/Card').default;
  });

  test('render', () => {
    const component = renderer.create(
      <Card>YOLO</Card>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('expanded', () => {

    const expandedComponent = <div>expanded</div>;
    const component = renderer.create(
      <Card
        expandedComponent={expandedComponent}
      >
        YOLO
      </Card>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.isExpanded = true;

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Card Component unit', () => {
  beforeEach(() => {
    Card = require('../../components/Card/Card').default;
  });

  test('children', () => {
    const component = shallow(<Card>YOLO</Card>);
    expect(component.contains('YOLO')).toBe(true);
  });

  test('min width', () => {
    const component = shallow(<Card minWidth={100}>YOLO</Card>);
    expect(component.prop('style').minWidth).toBe(100);
  });

  test('no min width', () => {
    const component = shallow(<Card>YOLO</Card>);
    expect(component.prop('style').minWidth).toBe(undefined);
  });
  test('expanded', () => {
    const expandedComponent = <div>expanded</div>;
    const component = shallow(
      <Card
        isExpanded
        expandedComponent={expandedComponent}
      >
        YOLO
      </Card>
    );

    expect(component.is('.isExpanded')).toBe(true);
    expect(component.find('.expanded')).toHaveLength(1);
  });
  test('actions', () => {
    const actions = [
      <div key='action1' className='action'></div>,
      <div key='action2' className='action'></div>,
    ];
    const component = shallow(
      <Card
        actions={actions}
      >
        YOLO
      </Card>
    );
    expect(component.find('.action')).toHaveLength(2);
  });

  test('no red border color', () => {
    const component = shallow(<Card>Test Card</Card>);
    expect(component.is('.borderColorRed')).toBe(false);
  });

  test('red border color', () => {
    const component = shallow(<Card borderColorRed>Test Red Card</Card>);
    expect(component.is('.borderColorRed')).toBe(true);
  });
});

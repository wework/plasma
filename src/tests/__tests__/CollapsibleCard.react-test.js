/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';

import CollapsibleCard from '../../components/CollapsibleCard/CollapsibleCard';

describe('CollapsibleCard Component unit', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <CollapsibleCard
        headerText="Header Text"
        expandableText="more"
      >
        Test Card
      </CollapsibleCard>
    );
  })

  test('displays header text', () => {
    expect(component.contains('Header Text')).toBe(true);
  });

  test('displays expandable text', () => {
    expect(component.contains('more')).toBe(true);
  });

  test('displays arrow up', () => {
    expect(component.find('.textLinkArrowUp').exists()).toBe(true);
  });

  test('no red border color', () => {
    expect(component.is('.styleColorRed')).toBe(false);
  });

  test('red border color', () => {
    component = shallow(
      <CollapsibleCard
        headerText="Header Text"
        styleColor="red"
      >
        Test Red Card
      </CollapsibleCard>
    );
    expect(component.is('.styleColorRed')).toBe(true);
  });

  test('displays children', () => {
    component = shallow(
      <CollapsibleCard
        headerText="Header Text"
      >
        Test Card
      </CollapsibleCard>
    );
    expect(component.contains('Test Card')).toBe(true);
  });

  describe('when clicked ', () => {
    test('does not display children', () => {
      component.find('.textLink').simulate('click');
      expect(component.contains('Test Card')).toBe(false);
    });

    test('displays arrow down', () => {
      component.find('.textLink').simulate('click');
      expect(component.find('.textLinkArrowDown').exists()).toBe(true);
    });
  });

  describe('when disabled ', () => {
    beforeEach(() => {
      component = shallow(
        <CollapsibleCard
          headerText="Header Text"
          expandableText="more"
          disabled
        >
          Test Card
        </CollapsibleCard>
      );
    });

    test('displays header text', () => {
      expect(component.contains('Header Text')).toBe(true);
    });

    test('does not display arrow down', () => {
      expect(component.find('.textLinkArrowDown').exists()).toBe(false);
    });

    test('does not display arrow up', () => {
      expect(component.find('.textLinkArrowUp').exists()).toBe(false);
    });

    test('does not display children', () => {
      expect(component.contains('Test Card')).toBe(false);
    });
  });
});

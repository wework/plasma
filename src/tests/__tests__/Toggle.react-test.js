/* eslint-disable */

import React from 'react';
import Toggle from '../../components/Toggle/Toggle';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Toggle Component', () => {
  test('render', () => {
    const component = renderer.create(<Toggle />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('two items', () => {
    const items = [
      {
        label: 'one',
        title: 'One',
      },
      {
        label: 'two',
        title: 'Two',
      },
    ];
    const component = shallow(<Toggle items={items} />);
    const options = component.find('li');
    expect(options).toHaveLength(2);
    options.forEach(option => {
      expect(option.prop('data-state')).toEqual('enabled');
    });
  });

  describe('clicks', () => {
    const items = [
      {
        label: 'one',
        title: 'One',
      },
      {
        label: 'two',
        title: 'Two',
        disabled: true,
      },
    ];
    const onChange = jest.fn();
    const component = mount(<Toggle items={items} onChange={onChange} />);

    beforeEach(() => {
      onChange.mockClear();
    });

    test('enabled option is clickable', () => {
      const enabledOptions = component.find('li[data-state="enabled"]');
      expect(enabledOptions).toHaveLength(1);

      const enabledOption = enabledOptions.first();
      expect(enabledOption.text()).toEqual(items[0].title);

      enabledOption.simulate('click');
      expect(onChange).toHaveBeenCalledWith(items[0].label, 0);
    });

    test('enabled option accepts <enter> keydown', () => {
      const enabledOption = component.find('li[data-state="enabled"]').first();
      enabledOption.simulate('keydown', { keyCode: 13 });
      expect(onChange).toHaveBeenCalledWith(items[0].label, 0);
    });

    test('disabled options are not clickable', () => {
      const disabledOptions = component.find('li[data-state="disabled"]');
      expect(disabledOptions).toHaveLength(1);
      const disabledOption = disabledOptions.first();
      expect(disabledOption.text()).toEqual(items[1].title);
      disabledOption.simulate('click');
      disabledOption.simulate('keydown', { keyCode: 13 });
      expect(onChange).toHaveBeenCalledTimes(0);
    });
  });
});

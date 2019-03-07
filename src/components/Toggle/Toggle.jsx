// @flow
import React from 'react';
import cx from 'classnames';
import _ from 'lodash';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import style from './style.scss';

const type = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  SMALL: 'small',
};

type Props = {|
  items: Array<{
    label: string,
    title: string,
    disabled?: boolean,
  }>,
  onChange: (string, number) => void,
  selectedIndex?: number,
  selectedLabel: string,
  type: string,
  data?: Data,
  size?: string,
|};

class Toggle extends React.Component<Props> {
  static defaultProps = {
    items: [],
    type: type.HORIZONTAL,
    onChange: () => {},
  };
  onClick(toggle: Object, index: number) {
    if (toggle.disabled !== true) {
      this.props.onChange(toggle.label, index);
    }
  }

  onKeyDown(event: Object, toggle: Object, index: number) {
    if (event.keyCode === 13 /* enter */) {
      this.onClick(toggle, index);
    }
  }

  render() {
    return (
      <ul {...getDataAttrs(this.props.data)} className={style.toggleWrapper} role="tablist">
        {_.map(this.props.items, (toggle, index) => {
          const toggleClasses = cx(style.toggle, {
            [style.active]:
              this.props.selectedIndex === index || this.props.selectedLabel === toggle.label,
            [style.disabled]: toggle.disabled,
            [style.horizontal]: this.props.type === type.HORIZONTAL,
            [style.vertical]: this.props.type === type.VERTICAL,
            [style.small]: this.props.size === type.SMALL,
          });

          return (
            <li
              role="tab"
              onClick={() => this.onClick(toggle, index)}
              onKeyDown={event => this.onKeyDown(event, toggle, index)}
              className={toggleClasses}
              key={index}
              type={this.props.type}
              data-state={toggle.disabled ? 'disabled' : 'enabled'}
            >
              {toggle.title}
            </li>
          );
        })}
      </ul>
    );
  }
}

Toggle.displayName = 'Plasma@Toggle';

export default Toggle;

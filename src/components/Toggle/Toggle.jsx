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
  onClick(item: Object, index: number) {
    if (item.disabled !== true) {
      this.props.onChange(item.label, index);
    }
  }

  onKeyDown(event: Object, item: Object, index: number) {
    if (event.keyCode === 13 /* enter */) {
      this.onClick(item, index);
    }
  }

  render() {
    return (
      <ul {...getDataAttrs(this.props.data)} className={style.toggleWrapper} role="tablist">
        {_.map(this.props.items, (item, index) => {
          const toggleClasses = cx(style.toggle, {
            [style.active]:
              this.props.selectedIndex === index || this.props.selectedLabel === item.label,
            [style.disabled]: item.disabled,
            [style.horizontal]: this.props.type === type.HORIZONTAL,
            [style.vertical]: this.props.type === type.VERTICAL,
            [style.small]: this.props.size === type.SMALL,
          });

          return (
            <li
              role="tab"
              onClick={() => this.onClick(item, index)}
              onKeyDown={event => this.onKeyDown(event, item, index)}
              className={toggleClasses}
              key={index}
              type={this.props.type}
              data-state={item.disabled ? 'disabled' : 'enabled'}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    );
  }
}

Toggle.displayName = 'Plasma@Toggle';

export default Toggle;

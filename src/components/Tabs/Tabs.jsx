// @flow
import React from 'react';
import cn from 'classnames';
import { map } from 'lodash';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import style from './style.scss';

type Tab = {|
  label: Node,
  title: string,
|};

type Props = {|
  items: Array<Tab>,
  onChange?: (string, number) => void,
  selectedIndex?: number,
  selectedLabel?: string,
  data?: Data,
  plain?: string,
  vertical?: boolean,
|};

class Tabs extends React.Component<Props> {
  static defaultProps = {
    items: [],
    onChange: () => {},
  };

  onClick = (tab: Tab, index: number): void => {
    this.props.onChange(tab.label, index);
  };

  onKeyDown = (event: { keyCode: number }, tab: Tab, index: number): void => {
    if (event.keyCode === 13 /* enter */) {
      this.onClick(tab, index);
    }
  };

  getTabsStyle(): string {
    const { vertical, plain } = this.props;
    if (vertical) return style.verticalTabs;
    if (plain) return style.plainTabs;
    return style.tabs;
  }

  getTabStyle(): string {
    const { vertical, plain } = this.props;
    if (vertical) return style.verticalTab;
    if (plain) return style.plainTab;
    return style.tab;
  }

  getTabClassNames = (tab: Tab, index: number): string => {
    const baseTabClass = this.getTabStyle();
    return cn(baseTabClass, {
      [style.active]: this.props.selectedIndex === index || this.props.selectedLabel === tab.label,
      [style.first]: index === 0,
      [style.last]: index === this.props.items.length - 1,
    });
  };

  renderTab = (tab: Tab, index: number) => {
    return (
      <li
        role="tab"
        onClick={() => this.onClick(tab, index)}
        onKeyDown={event => this.onKeyDown(event, tab, index)}
        className={this.getTabClassNames(tab, index)}
        key={index}
        tabIndex="0"
      >
        {tab.title}
      </li>
    );
  };

  render() {
    return (
      <ul {...getDataAttrs(this.props.data)} className={this.getTabsStyle()} role="tablist">
        {map(this.props.items, this.renderTab)}
      </ul>
    );
  }
}

Tabs.displayName = 'Plasma@Tabs';

export default Tabs;

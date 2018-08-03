// @flow
import React, { Component, type Node } from 'react';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import SideNavBarItemGroup from './SideNavBarItemGroup';
import SideNavBarTop from './SideNavBarTop';
import style from './style.scss';

export type Item = {|
  id: string,
  icon: string,
  label: string,
  items: Array<Item>,
  linkComponent?: Node,
  tagText?: string,
  hidden?: boolean,
|};

type Props = {|
  items: Array<Item>,
  onChange: ({ id: number }) => void,
  selectedId: string,
  onClickTop: () => void,
  topText: string,
  topIcon: string,
  data: Data,
|};

class SideNavBar extends Component<Props> {

  handleClick = (result: Object): void => {
    this.props.onChange && this.props.onChange({ id: result.id });
  };

  renderItems(): Array<Node> {
    return this.props.items && this.props.items.map((item) => (
      <SideNavBarItemGroup
        key={item.id}
        id={item.id}
        icon={item.icon}
        label={item.label}
        onClick={this.handleClick}
        items={item.items}
        selectedId={this.props.selectedId}
      />)
    );
  }

  render() {
    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={style.wrapper}
      >
        <SideNavBarTop
          label={this.props.topText}
          icon={this.props.topIcon}
          onClick={this.props.onClickTop}
        />
        <div className={style.sidebarContent}>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

SideNavBar.displayName = 'Plasma@SideNavBar';

export default SideNavBar;

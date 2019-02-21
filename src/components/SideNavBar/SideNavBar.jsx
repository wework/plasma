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
  linkComponent: Node,
  tagText?: string,
  hidden?: boolean,
|};

type Props = {|
  items: Array<Item>,
  onChange: ({ id: number }) => void,
  selectedId: string,
  onClickTop?: () => void,
  topText?: string,
  topIcon?: string,
  data: Data,
  editingTopText?: boolean,
  topTextValue?: string,
  onTopTextChange?: ({ value: string }) => void,
  onBlurTop?: () => void,
|};

class SideNavBar extends Component<Props> {
  handleClick = (result: Object): void => {
    this.props.onChange && this.props.onChange({ id: result.id });
  };

  renderItems(): Array<Node> {
    return this.props.items.map(item => (
      <SideNavBarItemGroup
        key={item.id}
        id={item.id}
        icon={item.icon}
        label={item.label}
        onClick={this.handleClick}
        items={item.items}
        selectedId={this.props.selectedId}
      />
    ));
  }

  render() {
    const {
      data,
      editingTopText,
      onBlurTop,
      onClickTop,
      onTopTextChange,
      topIcon,
      topText,
      topTextValue,
    } = this.props;

    return (
      <div {...getDataAttrs(data)} className={style.wrapper}>
        {(topText || topIcon) && (
          <SideNavBarTop
            label={topText}
            icon={topIcon}
            onClick={onClickTop}
            onBlur={onBlurTop}
            editing={editingTopText}
            placeholder={topText}
            value={topTextValue}
            onChange={onTopTextChange}
          />
        )}
        <div className={style.sidebarContent}>{this.renderItems()}</div>
      </div>
    );
  }
}

SideNavBar.displayName = 'Plasma@SideNavBar';

export default SideNavBar;

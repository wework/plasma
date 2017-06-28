import React, { Component, PropTypes } from 'react';
import { forEach } from 'lodash';

import getDataAttrs from '../../getDataAttrs';
import SideNavBarItemGroup from './SideNavBarItemGroup';
import SideNavBarTop from './SideNavBarTop';
import style from './style.scss';

class SideNavBar extends Component {

  constructor() {
    super();
    this.renderItems = this.renderItems.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(result) {
    console.log(result.id);
    this.props.onChange && this.props.onChange({ id: result.id });
  }

  renderItems() {
    const items = [];
    forEach(this.props.items, (item) => {
      items.push(
        <SideNavBarItemGroup
          key={item.id}
          id={item.id}
          icon={item.icon}
          label={item.label}
          onClick={this.handleClick}
          items={item.items}
          selectedId={this.props.selectedId}
        />
      );
    });
    return items;
  }

  render() {
    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={style.wrapper}
      >
        <SideNavBarTop
          label={this.props.topText}
          onClick={this.props.onClickTop}
        />
        <div className={style.sidebarContent}>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

SideNavBar.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
  selectedId: PropTypes.string,
  onClickTop: PropTypes.func,
  topText: PropTypes.string,
  data: PropTypes.object,
};

SideNavBar.displayName = 'Plasma@SideNavBar';

export default SideNavBar;

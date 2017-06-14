import React, { Component, PropTypes } from 'react';
import { forEach } from 'lodash';

import SideNavBarItemGroup from './SideNavBarItemGroup';
import Base from '../Base.jsx';
import style from './style.scss';

class SideNavBar extends Component {

  constructor() {
    super();
    this.renderItems = this.renderItems.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(result) {
    this.props.onChange({ id: result.id });
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
      <div className={style.wrapper}>
        {this.renderItems()}
      </div>
    );
  }
}

SideNavBar.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
  selectedId: PropTypes.string,
};

SideNavBar.displayName = 'SideNavBar';

export default Base(SideNavBar);

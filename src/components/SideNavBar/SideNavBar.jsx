import React, { Component, PropTypes } from 'react';
import { forEach } from 'lodash';

import SideNavBarItemGroup from './SideNavBarItemGroup';
import getDataAttrs from '../../getDataAttrs';
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
          label={item.label}
          onClick={this.handleClick}
          items={item.items}
        />
      );
    });
    return items;
  }

  render() {
    return (
      <div
        {...getDataAttrs(this.props)}
        className={style.wrapper}
      >
        {this.renderItems()}
      </div>
    );
  }
}

SideNavBar.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
  data: PropTypes.object,
};

SideNavBar.displayName = 'SideNavBar';

export default SideNavBar;

import React, { Component, PropTypes } from 'react';
import { forEach, findIndex, get } from 'lodash';
import SideNavBarItem from './SideNavBarItem';
import Base from '../Base.jsx';
import style from './style.scss';

class SideNavBarItemGroup extends Component {

  constructor() {
    super();
    this.handleGroupClick = this.handleGroupClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleGroupClick() {
    if (this.props.items && this.props.items[0]) {
      this.props.onClick({ id: this.props.items[0].id });
    } else {
      this.props.onClick({ id: this.props.id });
    }
  }

  handleItemClick(itemId) {
    this.props.onClick({ id: itemId });
  }

  renderIconAndLabel() {
    const { icon, iconSize, iconStyle, label } = this.props;

    const renderIcon = icon && iconSize && (
      <img
        className={style.icon}
        style={{
          width: iconSize,
          height: iconSize,
          ...iconStyle,
        }}
        src={icon}
        alt={label}
      />
    );

    return (
      <div
        onClick={this.handleGroupClick}
        className={style.iconAndLabelContainer}
      >
        {renderIcon}
        <div className={style.groupLabel}>{label}</div>
      </div>
    );
  }

  renderSubItems() {
    const items = [];
    forEach(this.props.items, (groupedItem) => {
      items.push(
        <SideNavBarItem
          key={groupedItem.id}
          id={groupedItem.id}
          label={groupedItem.label}
          onClick={this.handleItemClick}
        />
      );
    });
    return items;
  }

  render() {
    return (
      <div
        className={style.groupWrapper}
      >
        {this.renderIconAndLabel()}
        <div className={style.groupSubItems}>
          { this.renderSubItems() }
        </div>
      </div>
    );
  }
}

SideNavBarItemGroup.defaultProps = {
  label: 'Label',
  iconSize: 16,
};

SideNavBarItemGroup.propTypes = {
  id: PropTypes.string,
  /**
  * URL to an image
  */
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  /**
  * Only override iconStyle when absolutely necessary.
  * Prefer `iconSize`.
  */
  iconStyle: PropTypes.object,
  label: PropTypes.string,
  onClick: PropTypes.func,
  items: PropTypes.array,
  darkBg: PropTypes.bool,
};

SideNavBarItemGroup.displayName = 'SideNavBarItemGroup';

export default Base(SideNavBarItemGroup);

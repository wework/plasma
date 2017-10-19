import React, { Component, PropTypes } from 'react';
import { find } from 'lodash';
import SideNavBarItem from './SideNavBarItem';
import style from './style.scss';

class SideNavBarItemGroup extends Component {

  handleGroupClick = () => {
    if (this.props.items && this.props.items[0]) {
      this.props.onClick({ id: this.props.items[0].id });
    } else {
      this.props.onClick({ id: this.props.id });
    }
  }

  handleItemClick = (itemId) => {
    this.props.onClick({ id: itemId });
  }

  renderIconAndLabel() {
    const { icon, iconSize, iconStyle, label, items } = this.props;
    if (!find(items, (item) => !item.hidden)) {
      return null;
    }

    const iconToRender = icon && iconSize && (
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
        <div className={style.iconWrapper}>
          {iconToRender}
        </div>
        <div className={style.groupLabelWrapper}>
          {label}
        </div>
      </div>
    );
  }

  renderSubItems() {
    const items = this.props.items.map((groupedItem) => {
      return !groupedItem.hidden && (
        <SideNavBarItem
          key={groupedItem.id}
          id={groupedItem.id}
          label={groupedItem.label}
          tagText={groupedItem.tagText}
          onClick={this.handleItemClick}
          selected={groupedItem.id === this.props.selectedId}
          linkComponent={groupedItem.linkComponent}
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
  iconSize: 22,
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
  selectedId: PropTypes.string,
};

SideNavBarItemGroup.displayName = 'Plasma@SideNavBarItemGroup';

export default SideNavBarItemGroup;

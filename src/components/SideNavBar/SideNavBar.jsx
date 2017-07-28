import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import {
  getDataAttrs,
  getDataProps,
} from '../../dataUtils';
import SideNavBarItemGroup from './SideNavBarItemGroup';
import SideNavBarTop from './SideNavBarTop';
import style from './style.scss';
class SideNavBar extends Component {

  handleClick = (result) => {
    this.props.onChange && this.props.onChange({ id: result.id });
  }

  renderItems() {
    return this.props.items.map((item) => (
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
        className={cn(style.wrapper, style.a)}
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

SideNavBar.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
  selectedId: PropTypes.string,
  onClickTop: PropTypes.func,
  topText: PropTypes.string,
  topIcon: PropTypes.string,
  ...getDataProps(),
};

SideNavBar.displayName = 'Plasma@SideNavBar';

export default SideNavBar;

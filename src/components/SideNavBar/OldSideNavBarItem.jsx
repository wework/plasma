import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './oldStyle.scss';

class SideNavBarItem extends Component {
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
      <div>
        {renderIcon}
        <div className={style.label}>{label}</div>
      </div>
    );
  }

  render() {
    const { children, darkBg, onClick, selected } = this.props;

    const wrapperClasses = cn(style.itemWrapper, {
      [style.darkBg]: darkBg,
      [style.selected]: selected,
    });

    return (
      <div
        className={wrapperClasses}
        onClick={onClick}
      >
        { children || this.renderIconAndLabel() }
      </div>
    );
  }
}

SideNavBarItem.defaultProps = {
  label: 'Label',
  iconSize: 24,
  selected: false,
};

SideNavBarItem.propTypes = {
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
  selected: PropTypes.bool,
  children: PropTypes.node,
  darkBg: PropTypes.bool,
};

SideNavBarItem.displayName = 'SideNavBarItem';

export default SideNavBarItem;

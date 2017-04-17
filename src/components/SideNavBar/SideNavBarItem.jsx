import React from 'react';
import cn from 'classnames';
import Base from '../Base.jsx';
import style from './style.scss';

class SideNavBarItem extends React.Component {
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
    )
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
  icon: React.PropTypes.string,
  iconSize: React.PropTypes.number,
  /**
  * Only override iconStyle when absolutely necessary.
  * Prefer `iconSize`.
  */
  iconStyle: React.PropTypes.object,
  label: React.PropTypes.string,
  onClick: React.PropTypes.func,
  selected: React.PropTypes.bool,
  children: React.PropTypes.node,
};

SideNavBarItem.displayName = 'SideNavBarItem';

export default Base(SideNavBarItem);

// @flow
import React, { Component, type Node } from 'react';
import cn from 'classnames';
import style from './oldStyle.scss';

type Props = {|
  icon: string,
  iconSize: number,
  iconStyle: Object,
  label: Node,
  onClick: () => mixed,
  selected: boolean,
  children: Node,
  darkBg: boolean,
|};

class SideNavBarItem extends Component<Props> {
  static defaultProps = {
    label: 'Label',
    iconSize: 24,
    selected: false,
  };

  renderIconAndLabel(): Node {
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
      <div className={wrapperClasses} onClick={onClick}>
        {children || this.renderIconAndLabel()}
      </div>
    );
  }
}

SideNavBarItem.displayName = 'Plasma@SideNavBarItem';

export default SideNavBarItem;

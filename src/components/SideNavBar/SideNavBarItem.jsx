// @flow
import React, { Component } from 'react';
import cn from 'classnames';
import style from './style.scss';

type Props = {|
  id: string,
  icon?: string,
  iconSize: number,
  iconStyle?: Object,
  label: React$Node,
  onClick: string => mixed,
  selected: boolean,
  children?: React$Node,
  darkBg?: boolean,
  linkComponent: ?React$Node,
  tagText: ?string,
|};

class SideNavBarItem extends Component<Props> {
  static defaultProps = {
    label: 'Label',
    iconSize: 16,
    selected: false,
    tagText: null,
  };

  _onClick = (): void => {
    this.props.onClick(this.props.id);
  };

  renderIconAndLabel(): React$Node {
    const { label } = this.props;

    return (
      <div className={style.iconAndLabelContainer}>
        <div className={style.label}>{label}</div>
      </div>
    );
  }

  render() {
    const { darkBg, selected, linkComponent, tagText } = this.props;

    const wrapperClasses = cn(style.itemWrapper, {
      [style.darkBg]: darkBg,
      [style.selected]: selected,
    });

    let comp;

    if (linkComponent) {
      comp = (
        <div className={wrapperClasses}>
          {linkComponent}
          {tagText && <div className={style.tag}>{tagText}</div>}
        </div>
      );
    } else {
      comp = (
        <div className={wrapperClasses} onClick={this._onClick}>
          {this.renderIconAndLabel()}
          {tagText && <div className={style.tag}>{tagText}</div>}
        </div>
      );
    }

    return comp;
  }
}

SideNavBarItem.displayName = 'Plasma@SideNavBarItem';

export default SideNavBarItem;

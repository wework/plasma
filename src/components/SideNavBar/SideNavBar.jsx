// @flow
import React, { Component, type Node } from 'react';
import style from './oldStyle.scss';

type Props = {|
  children: Node,
|};

class SideNavBar extends Component<Props> {
  render() {
    const {
      data,
      editingTopText,
      onBlurTop,
      onClickTop,
      onTopTextChange,
      topIcon,
      topText,
      topTextValue,
    } = this.props;

    return <div className={style.wrapper}>{this.props.children}</div>;
  }
}

SideNavBar.displayName = 'Plasma@SideNavBar';

export default SideNavBar;

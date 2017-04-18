import React, { Component, PropTypes } from 'react';

import Base from '../Base.jsx';
import style from './style.scss';

class SideNavBar extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

SideNavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

SideNavBar.displayName = 'SideNavBar';

export default Base(SideNavBar);

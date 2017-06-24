import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './oldStyle.scss';

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

export default SideNavBar;

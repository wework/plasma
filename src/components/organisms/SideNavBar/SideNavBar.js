import React from 'react';
import style from './style.scss';

class SideNavBar extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        { this.props.children }
      </div>
    );
  }
}

SideNavBar.defaultProps = {
  children: 'Lorem ipsum'
};

SideNavBar.displayName = 'SideNavBar';

export default SideNavBar;

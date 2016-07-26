import React from 'react';
import style from './style.scss';

class SideNavBarItem extends React.Component {
  render() {
    return (
      <div className={style.itemWrapper}>
        <img
          className={ style.icon }
          style={ this.props.iconStyle }
          src={ this.props.icon }
        />
        { this.props.label }
      </div>
    );
  }
}

SideNavBarItem.defaultProps = {
  label: 'Label'
};

SideNavBarItem.displayName = 'SideNavBarItem';

export default SideNavBarItem;
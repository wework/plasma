import React from 'react';
import style from './style.scss';

class SideNavBarItem extends React.Component {
  render() {
    return (
      <div
        className={style.itemWrapper}
        onClick={this.props.onClick}
      >
        <img
          className={style.icon}
          style={{width: this.props.iconSize, height: this.props.iconSize, ...this.props.iconStyle}}
          src={this.props.icon}
          alt={this.props.label}
        />
        {this.props.label}
      </div>
    );
  }
}

SideNavBarItem.defaultProps = {
  label: 'Label',
  iconSize: 24
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
};

SideNavBarItem.displayName = 'SideNavBarItem';

export default SideNavBarItem;

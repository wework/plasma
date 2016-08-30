import React from 'react';
import style from './style.scss';

class TopNavBar extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

TopNavBar.defaultProps = {
  children: null,
};

TopNavBar.propTypes = {
  children: React.PropTypes.node.isRequired,
};

TopNavBar.displayName = 'TopNavBar';

export default TopNavBar;

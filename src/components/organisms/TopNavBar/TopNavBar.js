import React from 'react';
import style from './style.scss';

class TopNavBar extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        { this.props.children }
      </div>
    );
  }
}

TopNavBar.defaultProps = {
  children: ''
};

TopNavBar.displayName = 'Organism.TopNavBar';

export default TopNavBar;

import React from 'react';
import PropTypes from 'prop-types';
import Base from '../Base.jsx';
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
  children: PropTypes.node.isRequired,
};

TopNavBar.displayName = 'TopNavBar';

export default Base(TopNavBar);

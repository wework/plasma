import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import getDataAttrs from '../../getDataAttrs';

class TopNavBar extends React.Component {
  render() {
    return (
      <div
        className={style.wrapper}
        {...getDataAttrs(this.props.data)}
      >
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
  data: PropTypes.object,
};

TopNavBar.displayName = 'TopNavBar';

export default TopNavBar;

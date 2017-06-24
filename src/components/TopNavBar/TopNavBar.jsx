import React from 'react';
import PropTypes from 'prop-types';
import getDataAttrs from '../../getDataAttrs';
import style from './style.scss';

class TopNavBar extends React.Component {
  render() {
    return (
      <div
        {...getDataAttrs(this.props)}
        className={style.wrapper}
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

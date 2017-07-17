import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import {
  getDataAttrs,
  getDataProps,
} from '../../dataUtils';

class TopNavBar extends React.Component {
  render() {
    return (
      <div
        {...getDataAttrs(this.props.data)}
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
  ...getDataProps(),
};

TopNavBar.displayName = 'Plasma@TopNavBar';

export default TopNavBar;

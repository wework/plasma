import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Base from '../Base.jsx';
import style from './style.scss';

class Loader extends React.Component {
  render() {
    return (
      <div className={style.container} style={this.props.style}>
        <div
          className={style.spinner}
        >
          <div
            className={style.bounce1}
            style={this.props.dotStyle}
          />
          <div
            className={style.bounce2}
            style={this.props.dotStyle}
          />
          <div
            className={style.bounce3}
            style={this.props.dotStyle}
          />
        </div>
      </div>
    );
  }
}

Loader.defaultProps = {};

Loader.propTypes = {
  style: PropTypes.object,
  dotStyle: PropTypes.object,
};

Loader.displayName = 'Loader';

export default Base(Loader);

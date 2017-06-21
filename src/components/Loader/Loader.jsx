import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import getDataAttrs from '../../getDataAttrs';

class Loader extends React.Component {
  render() {
    return (
      <div
        className={style.container}
        style={this.props.style}
        {...getDataAttrs(this.props.data)}
      >
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
  data: PropTypes.object,
};

Loader.displayName = 'Loader';

export default Loader;

import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import {
  getDataAttrs,
  getDataProps,
} from '../../dataUtils';

class Loader extends React.Component {
  render() {
    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={style.container}
        style={this.props.style}
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
  ...getDataProps(),
};

Loader.displayName = 'Plasma@Loader';

export default Loader;

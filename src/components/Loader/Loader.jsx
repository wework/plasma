// @flow
import React from 'react';
import style from './style.scss';
import {
  getDataAttrs,
} from '../../dataUtils';

type Props = {
  data: { [string]: mixed },
  style: { [string]: mixed },
  dotStyle: { [string]: mixed }
};

class Loader extends React.Component<Props> {
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

Loader.displayName = 'Plasma@Loader';

export default Loader;

// @flow
import React from 'react';
import style from './style.scss';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';

type Props = {|
  style?: Object,
  dotStyle: ?Object,
  data?: Data,
|};

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

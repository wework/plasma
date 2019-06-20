// @flow
import React from 'react';
import cn from 'classnames';
import style from './style.scss';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';

type Props = {|
  className?: Object,
  dotColor?: string,
  dotClassName?: Object,
  style?: Object,
  dotStyle?: ?Object,
  data?: Data,
|};

class Loader extends React.Component<Props> {
  render() {
    const dotStyle = this.props.dotStyle || {};
    if (this.props.dotColor != null) {
      dotStyle.backgroundColor = this.props.dotColor;
    }

    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={cn(style.container, this.props.className)}
        style={this.props.style}
      >
        <div className={style.spinner}>
          <div className={cn(style.bounce2, this.props.dotClassName)} style={dotStyle} />
          <div className={cn(style.bounce3, this.props.dotClassName)} style={dotStyle} />
          <div className={cn(style.bounce1, this.props.dotClassName)} style={dotStyle} />
        </div>
      </div>
    );
  }
}

Loader.displayName = 'Plasma@Loader';

export default Loader;

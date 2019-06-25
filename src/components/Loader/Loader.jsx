// @flow
import React from 'react';
import cn from 'classnames';
import style from './style.scss';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';

type Props = {|
  className?: string,
  dotColor?: string,
  dotClassName?: string,
  style?: Object,
  dotStyle: Object,
  data?: Data,
|};

class Loader extends React.Component<Props> {
  static defaultProps = {
    dotStyle: {},
  };

  render() {
    const { dotColor, dotStyle } = this.props;
    if (dotColor != null) {
      dotStyle.backgroundColor = dotColor;
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

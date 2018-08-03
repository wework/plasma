// @flow
import React, { type Node } from 'react';
import cx from 'classnames';
import style from './style.scss';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';

type Props = {|
  children: Array<Node>,
  style: Object,
  vertical: Boolean,
  data: Data,
|};

class SegmentedCard extends React.Component<Props> {
  static defaultProps = {
    children: ['Side', 'Content'],
    style: {},
  };
  render() {
    const className = cx(style.card, {
      [style.vertical]: this.props.vertical,
    });

    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={className}
        style={this.props.style}
      >
        <div className={style.first}>
          { this.props.children[0] }
        </div>
        <div className={style.second}>
          { this.props.children[1] }
        </div>
      </div>
    );
  }
}

SegmentedCard.displayName = 'Plasma@SegmentedCard';

export default SegmentedCard;

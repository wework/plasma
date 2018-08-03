// @flow
import React, { type Node } from 'react';
import style from './style.scss';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';

type Props = {|
  children: Node,
  content: Node,
  data: Data,
|};

class Tooltip extends React.Component<Props> {

  static defaultProps = {
    children: 'test',
    content: 'Protip: Tooltips can be used to reveal information.',
  };
  render() {
    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={style.wrapper}
      >
        { this.props.children }
        <div className={style.content}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

Tooltip.displayName = 'Plasma@Tooltip';

export default Tooltip;

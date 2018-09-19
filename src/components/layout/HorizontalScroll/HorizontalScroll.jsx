// @flow
import React, { type Node } from 'react';
import { getDataAttrs } from '../../../dataUtils';
import type { Data } from '../../../types';
import style from './style.scss';

type Props = {|
  children: Node,
  onScroll: (evt: MouseEvent) => void,
  style: Object,
  data: Data,
|};

class HorizontalScroll extends React.Component<Props> {
  static defaultProps = {
    children: null,
    onScroll: () => {},
  };

  componentDidMount() {
    if (this.wrapper) {
      this.wrapper.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (this.wrapper) {
      this.wrapper.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = (e: MouseEvent) => {
    this.props.onScroll(e);
  };

  wrapper: ?Object;
  render() {
    return (
      <div
        {...getDataAttrs(this.props.data)}
        style={this.props.style}
        className={style.wrapper}
        ref={(c) => { this.wrapper = c; }}
      >
        <div className={style.content}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

HorizontalScroll.displayName = 'Plasma@HorizontalScroll';

export default HorizontalScroll;

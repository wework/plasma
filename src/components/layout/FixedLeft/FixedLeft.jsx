// @flow
import { isNull, clamp } from 'lodash';
import React, { type Node } from 'react';
import style from './style.scss';
import { getDataAttrs } from '../../../dataUtils';
import type { Data } from '../../../types';

/**
  * The fixed left page is great.
 */

/* eslint-disable */
const getOffsetTop = (elem) => {
  let offsetTop = 0;
  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
  } while (elem = elem.offsetParent);
  return offsetTop;
};

type State = {|
  fixedWidth: number,
  translateY: number,
|};

type Props = {|
  children: Array<Node>,
  stickAt: number,
  contentStyle: Object,
  fixedStyle: Object,
  data: Data,
|};

/* eslint-enable */
class FixedLeft extends React.Component<Props, State> {

  static defaultProps = {
    children: [null, null],
    stickAt: null,
  };

  constructor() {
    super();
    this.state = {
      fixedWidth: 0,
      translateY: 0,
    };
  }

  componentDidMount() {
    if (!isNull(this.props.stickAt)) {
      document.addEventListener('scroll', this.handleScroll);
    }
    this.setState({ fixedWidth: this.fixed.offsetWidth });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    if (!isNull(this.props.stickAt)) {
      const offsetViewport = this.fixed.offsetTop;
      const offsetDoc = getOffsetTop(this.fixed);
      const ty = clamp(
        offsetDoc - offsetViewport, 0, this.fixedViewportOffsetOrigin - this.props.stickAt
      );
      this.fixed.style.transform = `translateY(${-ty})`;
    }
  };
  fixed: Object;
  fixedViewportOffsetOrigin: number;

  render() {
    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={style.wrapper}
      >
        <div
          className={style.fixedWrapper}
          style={{ ...this.props.fixedStyle }}
          ref={(c) => {
            if (c) {
              if (!this.fixedViewportOffsetOrigin) {
                this.fixedViewportOffsetOrigin = c.offsetTop;
              }
              this.fixed = c;
            }
          }}
        >
          { this.props.children[0] }
        </div>
        <div className={style.contentWrapper}>
          <div
            className={style.stub}
            style={{ width: this.state.fixedWidth, minWidth: this.state.fixedWidth }}
          />
          <div className={style.content} style={{ ...this.props.contentStyle }}>
            { this.props.children[1] }
          </div>
        </div>
      </div>
    );
  }
}

FixedLeft.displayName = '!Plasma@FixedLeft';

export default FixedLeft;

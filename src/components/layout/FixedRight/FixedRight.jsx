// @flow
import { isNull, clamp } from 'lodash';
import React from 'react';
import { getOffsetTop } from '../util';
import { getDataAttrs } from '../../../dataUtils';
import type { Data } from '../../../types';
import style from './style.scss';

/**
 * The fixed right page is great.
 */

type State = {|
  fixedWidth: number,
  translateY: number,
|};

type Props = {|
  children: React$Node,
  stickAt: number,
  fixedContainerStyle: Object,
  data?: Data,
|};

/* eslint-enable */
class FixedRight extends React.Component<Props, State> {
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
    // eslint-disable-next-line
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
        offsetDoc - offsetViewport,
        0,
        this.fixedViewportOffsetOrigin - this.props.stickAt
      );
      this.fixed.style.transform = `translateY(${-ty})`;
    }
  };
  fixed: Object;
  fixedViewportOffsetOrigin: number;

  render() {
    const children = React.Children.toArray(this.props.children);

    return (
      <div {...getDataAttrs(this.props.data)} className={style.wrapper}>
        <div className={style.contentWrapper}>
          <div className={style.content}>{children[0]}</div>
          <div
            className={style.stub}
            style={{ width: this.state.fixedWidth, minWidth: this.state.fixedWidth }}
          />
        </div>
        <div
          className={style.fixedWrapper}
          style={this.props.fixedContainerStyle}
          ref={c => {
            if (c) {
              if (!this.fixedViewportOffsetOrigin) {
                this.fixedViewportOffsetOrigin = c.offsetTop;
              }
              this.fixed = c;
            }
          }}
        >
          {children[1]}
        </div>
      </div>
    );
  }
}

FixedRight.displayName = '!Plasma@FixedRight';

export default FixedRight;

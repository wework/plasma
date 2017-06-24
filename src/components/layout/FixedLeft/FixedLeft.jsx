import { isNull, clamp } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import getDataAttrs from '../../../getDataAttrs';

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

/* eslint-enable */
class FixedLeft extends React.Component {

  constructor() {
    super();
    this.state = {
      fixedWidth: 0,
      translateY: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
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

  handleScroll() {
    if (!isNull(this.props.stickAt)) {
      const offsetViewport = this.fixed.offsetTop;
      const offsetDoc = getOffsetTop(this.fixed);
      const ty = clamp(
        offsetDoc - offsetViewport, 0, this.fixedViewportOffsetOrigin - this.props.stickAt
      );
      this.fixed.style.transform = `translateY(${-ty})`;
    }
  }

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

FixedLeft.defaultProps = {
  children: [null, null],
  stickAt: null,
};

FixedLeft.propTypes = {
  children: PropTypes.array.isRequired,
  stickAt: PropTypes.number,
  contentStyle: PropTypes.object,
  fixedStyle: PropTypes.object,
  data: PropTypes.object,
};

FixedLeft.displayName = '!Plasma@FixedLeft';

export default FixedLeft;

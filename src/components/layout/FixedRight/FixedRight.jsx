import { isNull, clamp } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { getOffsetTop } from '../util';
import {
  getDataAttrs,
  getDataProps,
} from '../../../dataUtils';
import style from './style.scss';

/**
  * The fixed right page is great.
 */

/* eslint-enable */
class FixedRight extends React.Component {

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
        <div className={style.contentWrapper}>
          <div className={style.content}>
            { this.props.children[0] }
          </div>
          <div
            className={style.stub}
            style={{ width: this.state.fixedWidth, minWidth: this.state.fixedWidth }}
          />
        </div>
        <div
          className={style.fixedWrapper}
          style={this.props.fixedContainerStyle}
          ref={(c) => {
            if (c) {
              if (!this.fixedViewportOffsetOrigin) {
                this.fixedViewportOffsetOrigin = c.offsetTop;
              }
              this.fixed = c;
            }
          }}
        >
          { this.props.children[1] }
        </div>
      </div>
    );
  }
}

FixedRight.defaultProps = {
  children: [null, null],
  stickAt: null,
};

FixedRight.propTypes = {
  children: PropTypes.array.isRequired,
  stickAt: PropTypes.number,
  fixedContainerStyle: PropTypes.object,
  ...getDataProps(),
};

FixedRight.displayName = '!Plasma@FixedRight';

export default FixedRight;

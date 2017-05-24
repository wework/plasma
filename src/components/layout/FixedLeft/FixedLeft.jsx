import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import Base from '../../Base.jsx';
import style from './style.scss';

/**
  * The fixed left page is great.
 */

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
    if (!_.isNull(this.props.stickAt)) {
      $(document).on('scroll', this.handleScroll);
    }
    this.setState({ fixedWidth: this.fixed.offsetWidth });
  }

  componentWillUnmount() {
    $(document).off('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!_.isNull(this.props.stickAt)) {
      const offsetViewport = $(this.fixed).position().top;
      const offsetDoc = $(this.fixed).offset().top;
      const ty = _.clamp(
        offsetDoc - offsetViewport, 0, this.fixedViewportOffsetOrigin - this.props.stickAt
      );
      $(this.fixed).css(
        'transform', `translateY(${-ty}px)`);
    }
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div
          className={style.fixedWrapper}
          style={{ ...this.props.fixedStyle }}
          ref={(c) => {
            if (c) {
              if (!this.fixedViewportOffsetOrigin) {
                this.fixedViewportOffsetOrigin = $(c).position().top;
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
};

FixedLeft.displayName = '!FixedLeft';

export default Base(FixedLeft);

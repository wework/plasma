import _ from 'lodash';
import $ from 'jquery';
import React from 'react';

import Base from '../../Base.jsx';
import style from './style.scss';

/**
  * The fixed right page is great.
 */

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
      console.log(ty);
      $(this.fixed).css(
        'transform', `translateY(${-ty}px)`);
    }
  }

  render() {
    console.log(this.props.fixedContainerStyle);
    return (
      <div className={style.wrapper}>
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
                this.fixedViewportOffsetOrigin = $(c).position().top;
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
  children: React.PropTypes.array.isRequired,
  stickAt: React.PropTypes.number,
  fixedContainerStyle: React.PropTypes.object,
};

FixedRight.displayName = '!FixedRight';

export default Base(FixedRight);

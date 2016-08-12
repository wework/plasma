import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.scss';
import _ from 'lodash';
import $ from 'jquery';

/**
  * The fixed left page is great.
 */

class FixedLeft extends React.Component {

  constructor() {
    super();
    this.state = {
      fixedWidth: 0,
      translateY: 0
    }
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
      const stuckAt = _.clamp(offsetDoc - offsetViewport, 0, this.props.stickAt);
      this.setState({ translateY: -stuckAt });
    }
  }

  render() {
    return (
      <div className={ style.wrapper }>
        <div
          className={ style.fixedWrapper }
          style={ { transform: `translateY(${this.state.translateY}px)` } }
          ref={(c) => this.fixed = c}
        >
          { this.props.children[0] }
        </div>
        <div className={ style.contentWrapper }>
          <div
            className={ style.stub }
            style={{ width: this.state.fixedWidth, minWidth: this.state.fixedWidth }}
          />
          <div className={ style.content }>
            { this.props.children[1] }
          </div>
        </div>
      </div>
    );
  }
}

FixedLeft.defaultProps = {
  children: [null, null],
  stickAt: null
}

FixedLeft.propTypes = {
  children: React.PropTypes.array.isRequired
}

FixedLeft.displayName = '!Page.FixedLeft';

export default FixedLeft;
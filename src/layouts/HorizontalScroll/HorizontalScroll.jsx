import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import style from './style.scss';

class HorizontalScroll extends React.Component {

  componentDidMount() {
    $(this.wrapper).on('scroll', this.throttledHandleScroll);
  }

  componentDidUnmount() {
    $(this.wrapper).off('scroll');
  }

  handleScroll(e) {
    this.props.onScroll(e);
  }

  render() {
    return (
      <div className={style.wrapper} ref={(c) => { this.wrapper = c; }}>
        <div className={style.content}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

HorizontalScroll.defaultProps = {
  children: null,
};

HorizontalScroll.propTypes = {
  children: React.PropTypes.node,
  onScroll: React.PropTypes.func,
};

HorizontalScroll.displayName = 'HorizontalScroll';

export default HorizontalScroll;

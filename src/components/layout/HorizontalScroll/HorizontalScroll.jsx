import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import _ from 'lodash';
import getDataAttrs from '../../../getDataAttrs';
import style from './style.scss';

class HorizontalScroll extends React.Component {

  componentDidMount() {
    $(this.wrapper).on('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    $(this.wrapper).off('scroll');
  }

  handleScroll(e) {
    this.props.onScroll(e);
  }

  render() {
    return (
      <div
        style={this.props.style}
        className={style.wrapper}
        ref={(c) => { this.wrapper = c; }}
        {...getDataAttrs(this.props.data)}
      >
        <div className={style.content}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

HorizontalScroll.defaultProps = {
  children: null,
  onScroll: () => {},
};

HorizontalScroll.propTypes = {
  children: PropTypes.node,
  onScroll: PropTypes.func,
  style: PropTypes.object,
  data: PropTypes.obj,
};

HorizontalScroll.displayName = 'HorizontalScroll';

export default HorizontalScroll;

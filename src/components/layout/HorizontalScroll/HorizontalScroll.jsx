import React from 'react';
import PropTypes from 'prop-types';
import getDataAttrs from '../../../getDataAttrs';
import style from './style.scss';

class HorizontalScroll extends React.Component {

  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.wrapper.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.wrapper.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    this.props.onScroll(e);
  }

  render() {
    return (
      <div
        {...getDataAttrs(this.props)}
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

HorizontalScroll.defaultProps = {
  children: null,
  onScroll: () => {},
};

HorizontalScroll.propTypes = {
  children: PropTypes.node,
  onScroll: PropTypes.func,
  style: PropTypes.object,
  data: PropTypes.object,
};

HorizontalScroll.displayName = 'HorizontalScroll';

export default HorizontalScroll;

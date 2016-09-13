import React from 'react';
import style from './style.scss';

class HorizontalScroll extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        { this.props.children }
      </div>
    );
  }
}

HorizontalScroll.defaultProps = {
  children: null,
};

HorizontalScroll.propTypes = {
  children: React.PropTypes.node,
};

HorizontalScroll.displayName = 'HorizontalScroll';

export default HorizontalScroll;

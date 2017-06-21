import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import getDataAttrs from '../../getDataAttrs';

class Text extends React.Component {
  render() {
    return (
      <div
        className={style.wrapper}
        style={this.props.style}
        {...getDataAttrs(this.props.data)}
      >
        {this.props.children}
      </div>
    );
  }
}

Text.defaultProps = {
  style: { width: 200, height: 'auto' },
};

Text.propTypes = {
  style: PropTypes.object,
  children: PropTypes.element,
  data: PropTypes.object,
};

Text.displayName = 'Text';

export default Text;

import React from 'react';
import PropTypes from 'prop-types';
import getDataAttrs from '../../getDataAttrs';
import style from './style.scss';

class Text extends React.Component {
  render() {
    return (
      <div
        {...getDataAttrs(this.props)}
        className={style.wrapper}
        style={this.props.style}
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
};

Text.displayName = 'Plasma@Text';

export default Text;

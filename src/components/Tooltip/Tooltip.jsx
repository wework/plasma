import React from 'react';
import PropTypes from 'prop-types';
import getDataAttrs from '../../getDataAttrs';
import style from './style.scss';

class Tooltip extends React.Component {
  render() {
    return (
      <div
        {...getDataAttrs(this.props)}
        className={style.wrapper}
      >
        { this.props.children }
        <div className={style.content}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

Tooltip.defaultProps = {
  children: 'test',
  content: 'Protip: Tooltips can be used to reveal information.',
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node,
  data: PropTypes.object,
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;

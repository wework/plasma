import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import {
  getDataAttrs,
  getDataProps,
} from '../../dataUtils';

class Tooltip extends React.Component {
  render() {
    return (
      <div
        {...getDataAttrs(this.props.data)}
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
  ...getDataProps(),
};

Tooltip.displayName = 'Plasma@Tooltip';

export default Tooltip;

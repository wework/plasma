import React from 'react';
import PropTypes from 'prop-types';
import Base from '../Base.jsx';
import style from './style.scss';

class Tooltip extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
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
};

Tooltip.displayName = 'Tooltip';

export default Base(Tooltip);

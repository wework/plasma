import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './style.scss';
import getDataAttrs from '../../getDataAttrs';

class SegmentedCard extends React.Component {
  render() {
    const className = cx(style.card, {
      [style.vertical]: this.props.vertical,
    });

    return (
      <div
        className={className}
        style={this.props.style}
        {...getDataAttrs(this.props.data)}
      >
        <div className={style.first}>
          { this.props.children[0] }
        </div>
        <div className={style.second}>
          { this.props.children[1] }
        </div>
      </div>
    );
  }
}

SegmentedCard.defaultProps = {
  children: ['Side', 'Content'],
  style: {},
};

SegmentedCard.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  vertical: PropTypes.bool,
  data: PropTypes.obj,
};

SegmentedCard.displayName = 'SegmentedCard';

export default SegmentedCard;
